using Microsoft.EntityFrameworkCore;
using Cards.API.Model;

namespace Cards.API.Data
{
    public class CardsDbContext : DbContext
    {
        public CardsDbContext(DbContextOptions options) : base(options)
        {
           
        }

        public DbSet<Card> Cards { get; set; }

    }
}
