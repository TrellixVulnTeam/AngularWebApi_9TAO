using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class DaniasController : ApiController 
    {
        private RestauracjaContext db = new RestauracjaContext();

        // GET: api/Danias
        public IQueryable<Dania> GetDania()
        {
            return db.Dania;
        }

        // GET: api/Danias/5
        [ResponseType(typeof(Dania))]
        public IHttpActionResult GetDania(int id)
        {
            Dania dania = db.Dania.Find(id);
            if (dania == null)
            {
                return NotFound();
            }

            return Ok(dania);
        }

        // PUT: api/Danias/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDania(int id, Dania dania)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != dania.idD)
            {
                return BadRequest();
            }

            db.Entry(dania).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DaniaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Danias
        [ResponseType(typeof(Dania))]
        public IHttpActionResult PostDania(Dania dania)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Dania.Add(dania);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = dania.idD }, dania);
        }

        // DELETE: api/Danias/5
        [ResponseType(typeof(Dania))]
        public IHttpActionResult DeleteDania(int id)
        {
            Dania dania = db.Dania.Find(id);
            if (dania == null)
            {
                return NotFound();
            }

            db.Dania.Remove(dania);
            db.SaveChanges();

            return Ok(dania);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DaniaExists(int id)
        {
            return db.Dania.Count(e => e.idD == id) > 0;
        }
    }
}