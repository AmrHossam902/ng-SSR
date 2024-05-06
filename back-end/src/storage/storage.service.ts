import { Injectable } from '@nestjs/common';
import { mkdir, writeFile } from 'fs/promises';

@Injectable()
export class StorageService {

    constructor(){}

    saveFile(category: string, name: string , data: Buffer ){
        
        mkdir(`./static-files/${category}`, {"recursive": true })

        return writeFile(`./static-files/${category}/${name}`,data )

    }
}
