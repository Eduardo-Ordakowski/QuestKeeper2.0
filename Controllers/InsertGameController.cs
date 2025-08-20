using Microsoft.AspNetCore.Mvc;
using QuestKeeper2._0.Data;
using QuestKeeper2._0.Models;

namespace QuestKeeper2._0.Controllers
{
    public class InsertGameController : Controller
    {
        readonly ApplicationDbContext _db;

        public InsertGameController(ApplicationDbContext db)
        {
            _db = db;
        }

        public IActionResult Index()
        {
            var GameList = _db.Game.ToList();

            return View(GameList);
        }
        public IActionResult InsertPage()
        {
            var NewGame = new GameModel();

            return View(NewGame);
        }

        [HttpPost]

        public async Task<IActionResult> CreateGame (GameModel Game)
        {
            var NewGame = Game;

            _db.Game.Add(NewGame);
            await _db.SaveChangesAsync();

            return View("Index", _db.Game.ToList());
        }
    }


}
