import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];
  
  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    })
  }

  deleteCompany(id: number) {
    this.companyService.deleteCompany(id).subscribe((data) => {
      this.companies = this.companies.filter((company)=> company.id !== id);
    })
  }
}
