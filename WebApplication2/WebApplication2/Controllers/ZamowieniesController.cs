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
    public class ZamowieniesController : ApiController
    {
        private RestauracjaContext db = new RestauracjaContext();

        // GET: api/Zamowienies
        public IQueryable<Zamowienie> GetZamowienia()
        {
            return db.Zamowienia.Include(x => x.dania).Include(x => x.klient);
        }

        // GET: api/Zamowienies/5
        [ResponseType(typeof(Zamowienie))]
        public IHttpActionResult GetZamowienie(int id)
        {
            Zamowienie zamowienie = db.Zamowienia.Find(id);
            if (zamowienie == null)
            {
                return NotFound();
            }

            return Ok(zamowienie);
        }

        // PUT: api/Zamowienies/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutZamowienie(int id, Zamowienie zamowienie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != zamowienie.idZam)
            {
                return BadRequest();
            }

            db.Entry(zamowienie).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ZamowienieExists(id))
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

        // POST: api/Zamowienies
        [ResponseType(typeof(Zamowienie))]
        public IHttpActionResult PostZamowienie(Zamowienie zamowienie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Zamowienia.Add(zamowienie);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = zamowienie.idZam }, zamowienie);
        }

        // DELETE: api/Zamowienies/5
        [ResponseType(typeof(Zamowienie))]
        public IHttpActionResult DeleteZamowienie(int id)
        {
            Zamowienie zamowienie = db.Zamowienia.Find(id);
            if (zamowienie == null)
            {
                return NotFound();
            }

            db.Zamowienia.Remove(zamowienie);
            db.SaveChanges();

            return Ok(zamowienie);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ZamowienieExists(int id)
        {
            return db.Zamowienia.Count(e => e.idZam == id) > 0;
        }
    }
}