import * as express from  'express' //글자수 적다고 as를 빼지말라 이론을 이해하고 사용하세요
import {Request, Response, NextFunction} from 'express';
import { resolve } from 'path';

const app: express.Application = express();
const prod = process.env.NODE_ENV === 'production';

app.set('port', prod ? process.env.PORT : 3065); 
app.get('/', (req, res, next) => {
    res.send('react nodevird 백엔드 정상 작동');

});

app.listen(app.get('port'), () => {//express에 변수를 설정하는 명령어 
    console.log('sever is running on ${process.env.PORT}');
});