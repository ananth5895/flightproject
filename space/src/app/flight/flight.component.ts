import { Component, OnInit } from '@angular/core';
// import{ ApiServiceService} from'src'
import { FlightservicesService } from '../flightservices.service';


///



@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  sucess: boolean = true;
  LandSucc: boolean = true;
  showError!: string;
  name = "ananth";
  // sucess!: string;


  constructor(private http: FlightservicesService) { }
  flightData:any =[]
  dev_name = "ananth";
  ngOnInit() {
    this.http.fetchFlights().subscribe(data => {
      this.flightData = data;
      if (this.flightData.length == 0) {
        this.showError = "No Record Found";
      }
      console.log("Data :", this.flightData)
    })
  }

//send success f
  
  sendSuccess(succ:any) {
    this.sucess = succ;
    //console.log(succ);
    this.http.fetchLanchSucess(succ).subscribe(data => {
      this.flightData = data;
      console.log("sucees :", this.flightData)
    })
  }
//send yeear

  sendYear(year: any){
    console.log(year);
    this.http.fetchAll(year, this.sucess, this.LandSucc).subscribe(data => {
      this.flightData = data;
      console.log("sucees :", this.flightData)
    })
  }


//land


  LandSuccLuanchSucc(val:any) {
    this.LandSucc = val;
    this.http.fetchLanchSucessAndLandSuccess(val).subscribe(data => {
      this.flightData = data;
      console.log("Land :", this.flightData)
    })
  }

}
