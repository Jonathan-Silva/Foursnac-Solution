using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace Foursnac.Models
{
    public class ConexaoBanco
    {
        public static SqlConnection stringConexao = new SqlConnection(@"Data Source=104.197.17.94,1433; Initial Catalog=DB_Sonic_Parameters; User Id=diamondz; Password=Sonic!sql; Integrated Security=false");


        public static void Open()
        {
            try
            {
                stringConexao.Open();
            }
            catch (Exception)
            {

             
            }
        }

        public static void Close()
        {
            try
            {
                stringConexao.Close();
            }
            catch (Exception)
            {


            }
        }
    }
}
