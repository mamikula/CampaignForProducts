export class Campaign {
    campaignID : number;
    campaignName : string;
    keyWords : string;
    minAmount : number;
    campaignFund : number;
    status: boolean;
    townName : string;
    radius : number;

    constructor(campaignID : number,
        campaignName : string,
        keyWords : string,
        minAmount : number,
        campaignFund : number,
        status: boolean,
        townName : string,
        radius : number){
            this.campaignID = campaignID;
            this.campaignName = campaignName;
            this.keyWords = keyWords;
            this.minAmount = minAmount;
            this.campaignFund = campaignFund;
            this.status = status;
            this.townName = townName;
            this.radius = radius;
        }
}
