import { Injectable } from "@nestjs/common";
import { UserUseCases } from "../user.use-case";

@Injectable()
export class AdultMemberUseCases  extends UserUseCases{

    public RemplirDemande () {
       
        return null;
    }

    public PayerAssociation () {
       
        return null;
    }

    public MessageriesAssociation () {
       
        return null;
    }

    public StatHandicapDemande () {
       
        return null;
    }

    public SignerFicheEntrainement() {
       
        return null;
    }
}
