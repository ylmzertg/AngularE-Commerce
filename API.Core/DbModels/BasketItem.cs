using System;
using System.Collections.Generic;
using System.Text;

namespace API.Core.DbModels
{
    public class BasketItem : BaseEntity
    {
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string PictureUrl { get; set; }
        public string Brand { get; set; }
        public string Type { get; set; }
    }
}
