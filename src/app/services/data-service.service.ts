import { Injectable } from '@angular/core';


const data = [
  {
    "fecha": "12/01/2024",
    "evento": "Sell",
    "modalidad": "Recurrente",
    "plan": "Free",
    "frecuencia": "Mensual",
    "mrr": "$0,00",
    "new mrr": "$0,00",
    "churn mrr": "$0,00",
    "new churn mrr": "$0,00",
    "net mrr": "$0,00",
    "arpa": "$5,00",
    "lt": 4,
    "ltv": "$5,00",
    "país": "Argentina",
    "empresa": "Empresa 1",
    "perfil": "Broker"
  },
  {
    "fecha": "15/01/2024",
    "evento": "Buy",
    "modalidad": "One-time",
    "plan": "Premium",
    "frecuencia": "Anual",
    "mrr": "$10,00",
    "new mrr": "$2,00",
    "churn mrr": "$1,00",
    "new churn mrr": "$0,50",
    "net mrr": "$10,50",
    "arpa": "$15,00",
    "lt": 6,
    "ltv": "$60,00",
    "país": "Brazil",
    "empresa": "Empresa 2",
    "perfil": "Investor"
  },
  {
    "fecha": "18/01/2024",
    "evento": "Sell",
    "modalidad": "Recurrente",
    "plan": "Standard",
    "frecuencia": "Trimestral",
    "mrr": "$5,00",
    "new mrr": "$1,00",
    "churn mrr": "$0,50",
    "new churn mrr": "$0,20",
    "net mrr": "$5,30",
    "arpa": "$8,00",
    "lt": 5,
    "ltv": "$25,00",
    "país": "Mexico",
    "empresa": "Empresa 3",
    "perfil": "Agent"
  },
  {
    "fecha": "20/01/2024",
    "evento": "Buy",
    "modalidad": "One-time",
    "plan": "Basic",
    "frecuencia": "Mensual",
    "mrr": "$3,00",
    "new mrr": "$0,50",
    "churn mrr": "$0,25",
    "new churn mrr": "$0,10",
    "net mrr": "$3,15",
    "arpa": "$6,00",
    "lt": 3,
    "ltv": "$9,00",
    "país": "Chile",
    "empresa": "Empresa 4",
    "perfil": "Trader"
  },
  {
    "fecha": "22/01/2024",
    "evento": "Sell",
    "modalidad": "Recurrente",
    "plan": "Free",
    "frecuencia": "Mensual",
    "mrr": "$1,00",
    "new mrr": "$0,20",
    "churn mrr": "$0,10",
    "new churn mrr": "$0,05",
    "net mrr": "$1,05",
    "arpa": "$2,50",
    "lt": 2,
    "ltv": "$2,00",
    "país": "Colombia",
    "empresa": "Empresa 5",
    "perfil": "Analyst"
  },
  {
    "fecha": "25/01/2024",
    "evento": "Buy",
    "modalidad": "One-time",
    "plan": "Premium",
    "frecuencia": "Anual",
    "mrr": "$12,00",
    "new mrr": "$3,00",
    "churn mrr": "$1,50",
    "new churn mrr": "$0,75",
    "net mrr": "$13,25",
    "arpa": "$20,00",
    "lt": 7,
    "ltv": "$84,00",
    "país": "Peru",
    "empresa": "Empresa 6",
    "perfil": "Manager"
  },
  {
    "fecha": "28/01/2024",
    "evento": "Sell",
    "modalidad": "Recurrente",
    "plan": "Standard",
    "frecuencia": "Trimestral",
    "mrr": "$6,00",
    "new mrr": "$1,50",
    "churn mrr": "$0,75",
    "new churn mrr": "$0,30",
    "net mrr": "$6,30",
    "arpa": "$10,00",
    "lt": 6,
    "ltv": "$36,00",
    "país": "Ecuador",
    "empresa": "Empresa 7",
    "perfil": "Consultant"
  },
  {
    "fecha": "30/01/2024",
    "evento": "Buy",
    "modalidad": "One-time",
    "plan": "Basic",
    "frecuencia": "Mensual",
    "mrr": "$4,00",
    "new mrr": "$0,80",
    "churn mrr": "$0,40",
    "new churn mrr": "$0,16",
    "net mrr": "$4,16",
    "arpa": "$7,50",
    "lt": 4,
    "ltv": "$16,00",
    "país": "Uruguay",
    "empresa": "Empresa 8",
    "perfil": "Developer"
  },
  {
    "fecha": "02/02/2024",
    "evento": "Sell",
    "modalidad": "Recurrente",
    "plan": "Free",
    "frecuencia": "Mensual",
    "mrr": "$2,00",
    "new mrr": "$0,40",
    "churn mrr": "$0,20",
    "new churn mrr": "$0,08",
    "net mrr": "$2,08",
    "arpa": "$4,00",
    "lt": 3,
    "ltv": "$6,00",
    "país": "Paraguay",
    "empresa": "Empresa 9",
    "perfil": "Designer"
  }
]

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  
  countOccurrences(arr: any[], propertyToCount: string) {
    let counts: number[] = [];
    const labels: string[] = [];
  
    arr.forEach((obj: any) => {
      const value = obj[propertyToCount];
  
      if (!labels.includes(value)) {
        labels.push(value);
        counts.push(1);
      } else {
        const index = labels.indexOf(value);
        counts[index]++;
      }
    });
  
    return { counts, labels };
  }

  get getData(){ return data }
  get getEventoData(){ return this.countOccurrences(data,"evento") }
  get getModalidadData(){ return this.countOccurrences(data,"modalidad") }
  get getPlanData(){ return this.countOccurrences(data,"plan") }
  get getPerfilData(){ return this.countOccurrences(data,"perfil") }
  get getPaisData(){ return this.countOccurrences(data,"país") }
  get getFrecuenciaData(){ return this.countOccurrences(data,"frecuencia") }
  get getEmpresaData(){ return this.countOccurrences(data,"empresa") }

}
