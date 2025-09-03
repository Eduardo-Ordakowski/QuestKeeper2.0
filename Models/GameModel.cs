using System.ComponentModel.DataAnnotations;

namespace QuestKeeper2._0.Models
{
    public class GameModel
    {
        // Model para tabela GamePage; 
        public int Id { get; set; }
        public string BannerImgUrl { get; set; }
        public string IconImg { get; set; }
        
        [Required (ErrorMessage = "Preencha o campo de nome!")]
        public string Name { get; set; }
        
        [Required (ErrorMessage = "Preencha o campo de genero!")]
        public string Genre { get; set; }
        
        [Required (ErrorMessage = "Preencha o campo de descrição!")]
        public string Description { get; set; }
        
        [Required (ErrorMessage = "Preencha o campo de desenvolvedor!")]
        
        public string Developer { get; set; }
        public DateTime RealeseDate { get; set; }

    }
}
