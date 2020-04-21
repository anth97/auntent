import { SECRET_KEY } from "../config/constants";
import jwt from 'jsonwebtoken';


class JTW{
    private secretkey = SECRET_KEY as string;

    //expiresIn: 24 * 60 * 60, token de 1 día de duración
    sign(data: any): string{
        return jwt.sign({user: data.user},this.secretkey, {expiresIn: 24 * 60 * 60});
    }

    verify(token: string): string{
        try{
            return jwt.verify(token, this.secretkey) as string
        } catch(e){
            return 'La auntenticación del token es inválida. Por favor inicia sesión para obtener un nuevo token'
        }
    }
}

export default JTW;