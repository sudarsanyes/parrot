using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Parrot.Server.Models;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace Parrot.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class PictionaryController : Controller
    {
        public PictionaryController()
        {
            // Reserved. 
        }

        public string Index()
        {
            return string.Format($"The following are the apis available under this route: \r\nIndex \r\nHelp \r\nCreate(Card) \r\nRead(id) \r\nUpdate(id) \r\nDelete(id) \r\nDelete(id)");
        }

        public string Help()
        {
            return string.Format($"The following are the apis available under this route: \r\nIndex \r\nHelp \r\nCreate(Card) \r\nRead(id) \r\nUpdate(id) \r\nDelete(id) \r\nDelete(id)");
        }

        [HttpPost()]
        public bool Create([FromBody] Card card)
        {
            bool flag = false;
            try
            {
                using (var db = new PictionaryContext())
                {
                    card.Id = string.IsNullOrWhiteSpace(card.Id) ? Guid.NewGuid().ToString() : card.Id;
                    db.Cards.Add(card);
                    db.SaveChanges();
                    flag = true;
                }
            }
            catch
            {
                flag = false;
            }
            return flag;
        }

        [HttpGet("{id}")]
        public Card Read(string id)
        {
            Card foundCard;
            using (var db = new PictionaryContext())
            {
                foundCard = db.Cards.FirstOrDefault(x => x.Id == id);
            }
            return foundCard;
        }

        [HttpGet("{id}")]
        public string Update(string id)
        {
            return "Update";
        }

        [HttpGet("{id}")]
        public bool Delete(string id)
        {
            bool flag = false;
            try
            {
                using (var db = new PictionaryContext())
                {
                    var foundCard = db.Cards.FirstOrDefault(x => x.Id == id);
                    db.Cards.Remove(foundCard);
                    db.SaveChanges();
                    flag = true;
                }
            }
            catch
            {
                flag = false;
            }
            return flag;
        }

        public IEnumerable<Card> List()
        {
            using (var db = new PictionaryContext())
            {
                return db.Cards.ToList();
            }
        }

        public Card Random()
        {
            using (var db = new PictionaryContext())
            {
                var list = db.Cards.ToList();
                return list.OrderBy(x => Guid.NewGuid()).Take(1).First();
            }
        }
    }
}