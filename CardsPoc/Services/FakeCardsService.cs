using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

using CardsPoc.Controllers;

namespace CardsPoc.Services
{
    public class FakeCardsService
    {
        private IList<Card> Cards;

        public FakeCardsService()
        {
            Cards = new List<Card>
            {
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Message,
                    Content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisi enim. Phasellus non sem in erat sodales auctor. Sed vel ipsum at dolor adipiscing tempor. Maecenas libero lectus, vestibulum eleifend neque et, feugiat vehicula sem. Quisque sodales tempor dolor, eget commodo turpis gravida non. In id libero vel augue aliquam euismod. Proin dignissim ornare tortor nec pharetra. Integer sed mauris quis tellus porttitor dignissim. Ut at egestas massa. In hac habitasse platea dictumst.",
                    ImgUrl = ""
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Donation,
                    Content = "Quisque sit amet nibh risus. Donec condimentum at quam vel tincidunt. Etiam ut lacus eget nisl placerat aliquet. Etiam pharetra mauris nisl, vel malesuada urna tempus vitae. Quisque vestibulum egestas elit vulputate congue. In eget diam ut tellus sollicitudin eleifend non eget lectus. Nulla sed massa gravida augue tempus rhoncus. Maecenas ut nunc mauris. Duis luctus porta turpis sit amet semper. Mauris tincidunt sem ut magna scelerisque, quis dapibus erat viverra. Proin dui turpis, pulvinar ut diam nec, ornare faucibus nunc. Ut quis urna eu mauris consectetur sodales. Pellentesque imperdiet venenatis nisi, tempus faucibus sem rutrum id. In ut venenatis massa. Phasellus tristique erat nisl, nec venenatis lectus interdum sed. Praesent fermentum in nisi venenatis venenatis. Donec pulvinar erat turpis, nec sagittis lacus mollis vel. Vestibulum volutpat quam tortor, et hendrerit arcu viverra in. Suspendisse sit amet consequat quam, eu iaculis ipsum. Suspendisse ultrices, mauris non volutpat pellentesque, augue nibh sodales velit, at mattis nisl nibh sed mauris. Cras nunc mauris, porta quis diam quis, gravida rhoncus turpis. Sed vitae fringilla nunc. Aenean purus orci, tempor quis eros at, dignissim varius eros. Nulla facilisi.",
                    ImgUrl = @"\Images\3Cliffs-Hillside-SWS023.jpg"
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Message,
                    Content = "And here is some content",
                    ImgUrl = " "
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Donation,
                    Content = "Aliquam erat volutpat. Mauris iaculis lorem a adipiscing dictum. Integer eleifend magna non imperdiet interdum. Aenean mollis tellus diam, in rhoncus tortor porta a. Pellentesque mattis leo in justo vehicula euismod in in nibh. Mauris lobortis lectus laoreet accumsan feugiat. Sed accumsan metus quis accumsan facilisis. Aliquam tincidunt egestas quam, eu gravida eros rhoncus ut. Quisque vulputate magna nec nisi rutrum, id fermentum magna gravida. Nulla rhoncus elit sapien, sit amet ornare tellus pellentesque sit amet. Donec sed iaculis ligula. ",
                    ImgUrl = @"\Images\3CliffsBay-SWS018.jpg"
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Donation,
                    Content = "And here is some content ",
                    ImgUrl = @"\Images\IMG_0132.JPG"
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Donation,
                    Content = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vitae erat magna. Ut ornare a urna vitae porta. Aenean cursus purus quis augue sodales, sit amet vestibulum libero sagittis. Proin eleifend, mi eu lobortis dapibus, risus nisi semper turpis, eget tristique ligula magna sed mauris. Quisque tincidunt ante id nunc vestibulum malesuada. Cras laoreet at mauris ultrices accumsan. Ut sodales ligula vel malesuada varius. Nunc posuere, libero id dignissim hendrerit, mauris felis semper risus, sagittis egestas est lacus vehicula est. Vivamus id orci quis tortor faucibus eleifend. Nunc elementum blandit ligula id suscipit. Nunc vulputate purus at lacinia ullamcorper.",
                    ImgUrl = @"\Images\IMG_0143.JPG"
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Message,
                    Content = "And here is some content ",
                    ImgUrl = " "
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Message,
                    Content = "And here is some content ",
                    ImgUrl = " "
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Message,
                    Content = "And here is some content ",
                    ImgUrl = " "
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Donation,
                    Content = "And here is some content ",
                    ImgUrl = @"\Images\IMG_0180.JPG"
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Donation,
                    Content = "And here is some content ",
                    ImgUrl = @"\Images\IMG_0245.JPG"
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Donation,
                    Content = "And here is some content ",
                    ImgUrl = @"\Images\web-development-test-01.jpg"
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Message,
                    Content = "And here is some content ",
                    ImgUrl = " "
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Message,
                    Content = "And here is some content ",
                    ImgUrl = " "
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Message,
                    Content = "And here is some content ",
                    ImgUrl = " "
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Message,
                    Content = "And here is some content ",
                    ImgUrl = " "
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Message,
                    Content = "And here is some content ",
                    ImgUrl = " "
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Message,
                    Content = "And here is some content ",
                    ImgUrl = " "
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Message,
                    Content = "And here is some content ",
                    ImgUrl = " "
                },
                new Card
                {
                    Title = "This is a title",
                    CardType = CardType.Message,
                    Content = "And here is some content ",
                    ImgUrl = " "
                }
            };
            
        }

        public IList<Card> GetCards()
        {
            var rnd = new Random();
            var result = Cards.OrderBy(item => rnd.Next());
            return result.ToList();
        }
    }
}