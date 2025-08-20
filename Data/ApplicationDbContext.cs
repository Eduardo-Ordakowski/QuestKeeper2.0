using Microsoft.EntityFrameworkCore;
using QuestKeeper2._0.Models;

namespace QuestKeeper2._0.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        //Referencia a tabela no DB;
        public DbSet<GameModel> Game { get; set; }
    }
}