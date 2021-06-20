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
    public class PlatnoscsController : ApiController
    {
        private RestauracjaContext db = new RestauracjaContext();

        // GET: api/Platnoscs
        public IQueryable<Platnosc> GetPlatnosci()
        {
            return db.Platnosci;
        }

        // POST: api/Platnoscs
        [ResponseType(typeof(Platnosc))]
        public IHttpActionResult PostPlatnosc(Platnosc platnosc)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Platnosci.Add(platnosc);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = platnosc.idP }, platnosc);
        }

        // DELETE: api/Platnoscs/5
        [ResponseType(typeof(Platnosc))]
        public IHttpActionResult DeletePlatnosc(int id)
        {
            Platnosc platnosc = db.Platnosci.Find(id);
            if (platnosc == null)
            {
                return NotFound();
            }

            db.Platnosci.Remove(platnosc);
            db.SaveChanges();

            return Ok(platnosc);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PlatnoscExists(int id)
        {
            return db.Platnosci.Count(e => e.idP == id) > 0;
        }
    }
}