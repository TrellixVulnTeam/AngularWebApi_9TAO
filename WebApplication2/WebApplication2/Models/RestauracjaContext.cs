using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class RestauracjaContext : DbContext
    {
            public RestauracjaContext() : base("name=Restaurant")
            {
            }
            public DbSet<Dania> Dania { get; set; }
            public DbSet<Klient> Klienci { get; set; }
            public DbSet<Platnosc> Platnosci { get; set; }
            public DbSet<Zamowienie> Zamowienia { get; set; }
    }
}