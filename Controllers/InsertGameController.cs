using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
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

        //Redireciona para as páginas;

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

        [HttpGet]
        public IActionResult UpdatePage(int Id)
        {
            var Game = _db.Game.Find(Id);

            return View("UpdateGame", Game);
        }

        //Funções CRUD;

        [HttpPost]

        public async Task<IActionResult> CreateGame (GameModel Game)
        {
            var NewGame = Game;
            
            if(Game == null)
            {
                throw new Exception("Campos não foram preenchidos devidamente");
            }

            _db.Game.Add(NewGame);
            await _db.SaveChangesAsync();

            return View("Index");
        }

        [HttpPost]
        public async Task<IActionResult> UpdateGame (GameModel Game)
        {
            var GameToUpdate = _db.Game.Find(Game.Id);

            if(GameToUpdate == null)
            {
                throw new Exception($"Id: {Game.Id} não localizado");
            }

            GameToUpdate.Name = Game.Name;
            GameToUpdate.Genre = Game.Genre;
            GameToUpdate.Description = Game.Description;
            GameToUpdate.Developer = Game.Developer;
            GameToUpdate.RealeseDate = Game.RealeseDate;

            _db.Game.Update(GameToUpdate);
            await _db.SaveChangesAsync();

            return View("Index");
        }
    }
}
