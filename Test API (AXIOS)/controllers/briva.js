const axios = require('axios')
const url = require('url')

const api = axios.create({
    baseURL: 'https://partner.api.bri.co.id/'
})

class Briva {
    static async getBriva(req, res){
       try {
            const params = new url.URLSearchParams({
                client_id: 'OZyti69HiD8Z4pnRqaR00GAqp6jlo7Tu',
                client_secret: '9GADRBhzlr7GutGv'
            })
            
            const data = await axios.post('https://sandbox.partner.api.bri.co.id/oauth/client_credential/accesstoken?grant_type=client_credentials',{
                data: params.toString()
            })
            
            console.log(data.data, '====> berhasil');
       } catch (error) {
            res.status(error.response.status).json(error.response.data)
       } 
    }

    static postBriva (req, res) {
        try {
            const params = new url.URLSearchParams(req.body)
            console.log(req.body)
            const { client_id, client_secret } = req.body
            
            axios.post('https://sandbox.partner.api.bri.co.id/oauth/client_credential/accesstoken?grant_type=client_credentials',{
                data: params.toString()
            })
            .then((result) => {
                console.log(result, 'berhasilll')
            }).catch((err) => {
                console.log(err)
            });

        } catch (error) {
            res.status(error.response.status).json(error.response.data)
        }
    }
}


module.exports = Briva