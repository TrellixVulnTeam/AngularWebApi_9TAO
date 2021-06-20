using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Zamowienie
    {
        [Key]
        public int idZam { get; set; }
        public Klient klient { get; set; }
        public int nrKlienta { get; set; }
        public string imie { get; set; }
        public Dania dania { get; set; }        
        public int idD { get; set; }
        public string nazwa { get; set; }
        public float cena { get; set; }
        public bool zakonczone { get; set; }
    }
}