using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Platnosc
    {
        [Key]
        public int idP { get; set; }
        public string rodzajP { get; set; }
    }
}