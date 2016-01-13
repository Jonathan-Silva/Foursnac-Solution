using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Foursnac.Controllers
{
    public class EstabelecimentoController : Controller
    {
        // GET: Estabelecimento
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Registro()
        {
            return View();
        }
    }
}
