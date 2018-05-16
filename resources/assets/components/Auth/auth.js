import Axios from "axios";

export default 
{
    register(context, first_name, last_name, email, password)
    {
        axios.post(
            'api/register',
            {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
            }).then(response =>{
                if(response.status == 200){
                    context.response = response.data.message
                    console.log(response.data.message)
                }
            }, response => {
                context.response = response.data
                context.error = true
            });
        
    }

}