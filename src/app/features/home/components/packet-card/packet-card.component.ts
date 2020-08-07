import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-packet-card',
  templateUrl: './packet-card.component.html',
  styleUrls: ['./packet-card.component.scss']
})
export class PacketCardComponent implements OnInit {
  
  @Input() packetName: string = 'BASIC';
  @Input() packetPrice: string = '2.500';
  @Input() packetTrial: string = '1 mesec';
  @Input() packetTermins: string = '12 TERMINA MESE&#268;NO';
  @Input() packetEnters: string = '1 ULAZAK DNEVNO';
  
  @Output() emitSign: EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {

  }

  signForPacket(packetName){
    this.emitSign.emit(packetName);
  }
}
