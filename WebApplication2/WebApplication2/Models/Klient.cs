using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Klient
    {
        [Key]
        public int nrKlienta { get; set; }
        public string imie { get; set; }
        public string rodzajP { get; set; }
        public Platnosc platnosc { get; set; }
    }
}