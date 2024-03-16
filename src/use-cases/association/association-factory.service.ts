import { Injectable } from "@nestjs/common";
import { Association } from "../../core/entities";
import{ CreateAssociationDto,UpdateAssociationDto,DeleteAssociationDto} from "../../core/dtos"
@Injectable()

export class AssociationFactoryservice{
    createNewAssociation(createAssociation: CreateAssociationDto){
        const newAssociation = new Association();
        newAssociation.name=createAssociation.name;
        newAssociation.email=createAssociation.email;
        return newAssociation;
    }
    updateAssociation(updateAssociationDto: UpdateAssociationDto){
        const updateAssociation= new Association();
        updateAssociation.updatedAt=new Date();
        return updateAssociationDto;
    }
    deleteAssociation(deleteAssociation: DeleteAssociationDto){

    }
}