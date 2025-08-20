namespace QuestKeeper2._0.Models
{
    public class GameModel
    {
        // Model para tabela GamePage; 
        public int Id { get; set; }
        public string BannerImgUrl { get; set; }
        public string IconImg { get; set; }
        public string Name { get; set; }
        public string Genre { get; set; }
        public string Description { get; set; }
        public string Developer { get; set; }
        public DateTime RealeseDate { get; set; }

    }
}
