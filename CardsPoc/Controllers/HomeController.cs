using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using CardsPoc.Services;

using DotNetOpenAuth.Messaging;

namespace CardsPoc.Controllers
{
    public class HomeController : Controller
    {
        private FakeCardsService fakeCardsService;

        public HomeController()
        {
            fakeCardsService = new FakeCardsService();        
        }

        public ActionResult Index()
        {
            var cardsModel = new CardsViewModel();

            cardsModel.Cards.AddRange(fakeCardsService.GetCards());

            return View("Index", cardsModel);

        }

        public JsonResult GetMore()
        {
            return Json(fakeCardsService.GetCards(), JsonRequestBehavior.AllowGet);
        }
    }

    public class CardsViewModel
    {
        public CardsViewModel()
        {
            Cards = new List<Card>();
        }

        public IList<Card> Cards { get; private set; }
    }

    public class Card
    {
        public CardType CardType { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string ImgUrl { get; set; }
    }

    public enum CardType
    {
        Message,
        Donation
    }
}
