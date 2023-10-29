import axios from "axios";



let baseURL="localhost:8080"

const axiosInstance = axios.create({
  baseURL: baseURL,
//   headers: {
//     Authorization: `Bearer ${JSON.parse(localStorage.getItem("access_token"))}`,
//   },
});

// axiosInstance.interceptors.response.use(
//   function (response) {
//     // console.log("response ", response);
//     return response;
//   },
//   function (error) {
//     //console.log("error ", error);
//     let res = error.response;
//     if (
//       res?.status == 401
//     ) {
//       // deslogar o usuário
//       // localStorage.removeItem("access_token");
//       // localStorage.removeItem("codeChallenge");
//       // localStorage.removeItem("code_verifier");

//     }

//     if (res?.status == 503) {
//       // console.log("Serviço indisponível, código  503");
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;