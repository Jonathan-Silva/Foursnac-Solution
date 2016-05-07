using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using System.Collections;
using Foursnac.Models;


namespace Foursnac.Controllers
{
    public class RastreioController : Controller
    {



        public static string CAMPANHA;
        // GET: Rastreio
        public ActionResult Index(string campanha)
        {
            CAMPANHA = campanha;
            ConexaoBanco.Open();
            AtulizarContagem();
            ConexaoBanco.Close();


            return RedirectToAction("Index", "Home");
        }

        public static List<RastreioModels> StatusContagem()
        {
            List<RastreioModels> ListRastreio = new List<RastreioModels>();
            string sqlstring = "";
            sqlstring = "SELECT * from RASTREIO WHERE DATA =(@data)";
            using (SqlCommand Comando = new SqlCommand(sqlstring, ConexaoBanco.stringConexao))
            {

                var parametro = new SqlParameter("@data", SqlDbType.Date);
                parametro.Value = DateTime.Today;
                Comando.Parameters.Add(parametro);

                SqlDataReader Ler = Comando.ExecuteReader();


                while (Ler.Read())
                {
                    RastreioModels Rastreio = new RastreioModels();
                    Rastreio.ID = Convert.ToInt64(Ler["ID"].ToString());
                    Rastreio.CONTEGEM = Convert.ToInt64(Ler["CONTAGEM"].ToString());
                    Rastreio.DATA = Convert.ToDateTime(Ler["DATA"].ToString());
                    Rastreio.CAMPANHA = Ler["CAMPANHA"].ToString();
                    ListRastreio.Add(Rastreio);
                }
                Ler.Close();
            }
            return (ListRastreio);
        }

        public static void AtulizarContagem()
        {
            List<RastreioModels> ListRastreio = new List<RastreioModels>();
            ListRastreio = StatusContagem();

            string sqlstring = "";

            try
            {
                int contador = 0;
                bool vefirica = false;
                foreach (var item in ListRastreio)
                {
                    if ((ListRastreio[contador].DATA == DateTime.Today) && (ListRastreio[contador].CAMPANHA == CAMPANHA))
                    {
                        //Update
                        sqlstring = "UPDATE RASTREIO SET CONTAGEM= @contagem WHERE ID=(@id)";
                        using (SqlCommand ComandoUpdate = new SqlCommand(sqlstring, ConexaoBanco.stringConexao))
                        {
                            var parametro = new SqlParameter("@contagem", SqlDbType.BigInt);
                            parametro.Value = (ListRastreio[contador].CONTEGEM + 1);
                            ComandoUpdate.Parameters.Add(parametro);

                            var parametro1 = new SqlParameter("@id", SqlDbType.BigInt);
                            parametro1.Value = ListRastreio[contador].ID;
                            ComandoUpdate.Parameters.Add(parametro1);

                            ComandoUpdate.ExecuteNonQuery();
                        }
                        vefirica = true;
                    }

                    contador++;
                }


                if (vefirica == false)
                {
                    //into
                    sqlstring = "INSERT INTO RASTREIO (CONTAGEM, DATA, CAMPANHA) VALUES (" + 1 + ",'" + DateTime.Today + "'," + CAMPANHA + ")";
                    SqlCommand ComandoInto = new SqlCommand(sqlstring, ConexaoBanco.stringConexao);
                    var parametro = new SqlParameter("@contagem", SqlDbType.BigInt);
                    parametro.Value = 1;
                    ComandoInto.Parameters.Add(parametro);

                    var parametro1 = new SqlParameter("@data", SqlDbType.Date);
                    parametro1.Value = DateTime.Today;
                    ComandoInto.Parameters.Add(parametro1);

                    var parametro2 = new SqlParameter("@campanha", SqlDbType.BigInt);
                    parametro2.Value = CAMPANHA;
                    ComandoInto.Parameters.Add(parametro2);

                    ComandoInto.ExecuteNonQuery();

                }
            }
            catch (Exception)
            {

            }
        }

    }
}