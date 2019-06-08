import { Component, OnInit } from '@angular/core';
import { MemberService} from '../member.service';
import { Member } from '../members';
import { Booking } from '../booking';
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  members: Member[];

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers()
    .subscribe((members) => {
      this.members = members;
      console.log(this.members)
    })
  }

  addnewmember(member: []) : void {
    this.memberService.addMember({name} as Member)
    .subscribe(member => { this.members.push(name);
    });
  }

  add(name: any): void {
    name = name.trim();
    if(!name){
      return;
    }
    this.memberService.addMember({ name } as Member)
    .subscribe(member => {
      this.members.push(name);
    });
  }
}
