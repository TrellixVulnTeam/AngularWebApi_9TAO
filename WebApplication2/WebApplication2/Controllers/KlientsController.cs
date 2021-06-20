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
    public class KlientsController : ApiController
    {
        private RestauracjaContext db = new RestauracjaContext();

        // GET: api/Klients
        public IQueryable<Klient> GetKlienci()
        {
            return db.Klienci;
        }

        // GET: api/Klients/5
        [ResponseType(typeof(Klient))]
        public IHttpActionResult GetKlient(int id)
        {
            Klient klient = db.Klienci.Find(id);
            if (klient == null)
            {
                return NotFound();
            }

            return Ok(klient);
        }

        // PUT: api/Klients/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutKlient(int id, Klient klient)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != klient.nrKlienta)
            {
                return BadRequest();
            }

            db.Entry(klient).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KlientExists(id))
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

        // POST: api/Klients
        [ResponseType(typeof(Klient))]
        public IHttpActionResult PostKlient(Klient klient)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Klienci.Add(klient);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = klient.nrKlienta }, klient);
        }

        // DELETE: api/Klients/5
        [ResponseType(typeof(Klient))]
        public IHttpActionResult DeleteKlient(int id)
        {
            Klient klient = db.Klienci.Find(id);
            if (klient == null)
            {
                return NotFound();
            }

            db.Klienci.Remove(klient);
            db.SaveChanges();

            return Ok(klient);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool KlientExists(int id)
        {
            return db.Klienci.Count(e => e.nrKlienta == id) > 0;
        }
    }
}