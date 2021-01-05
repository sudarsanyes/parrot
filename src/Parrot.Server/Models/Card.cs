using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parrot.Server.Models
{
    public class Card
    {
        public string Id { get; set; }

        public string Word { get; set; }

        /// <summary>
        /// Gets or sets the level. 
        /// 0 = Easy
        /// 10 = Tough
        /// </summary>
        /// <value>
        /// The level.
        /// </value>
        public int Level { get; set; }
    }
}