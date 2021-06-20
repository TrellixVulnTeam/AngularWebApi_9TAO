using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Dania
    {
        [Key]
        public int idD { get; set; }
        public string nazwa { get; set; }
        public string rodzaj { get; set; }
        public float cena { get; set; }

    }
}