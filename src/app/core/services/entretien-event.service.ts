  import { Injectable } from '@angular/core';
  import { HttpClient, HttpParams } from '@angular/common/http';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class EntretienEventService {
    private apiUrl = 'http://localhost:1919/api/entretiens'; 

    constructor(private http: HttpClient) { }

  
    getResponsablesDisponibles(date: string, roleType:string): Observable<any[]> {
      const params = new HttpParams()
        .set('date', date)
        .set('roleType', roleType); 

      return this.http.get<any[]>(`${this.apiUrl}/responsables-disponibles`, { params });
    }
    getEntretienById(id: any): Observable<any> {
      return this.http.get(`${this.apiUrl}/by-id/${id}`);
    }
    getAllEntretiensWithApplications(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/all-with-interviews`);
    }

    planifierEntretien(applicationId: string, type: string, date: Date, location: string, start: string, end: string, responsableId: number): Observable<any> {
      const params = new HttpParams()
        .set('applicationId', applicationId)
        .set('type', type)
        .set('date', date.toISOString())
        .set('lieu', location)
        .set('heureDebut', start)
        .set('heureFin', end)
        .set('responsableId', responsableId.toString());  
    
      return this.http.post<any>(`${this.apiUrl}/planifier`, null, { params });
    }

    updateApplicationStatus(applicationId: number, status: string): Observable<any> {
      const body = { applicationId, status };
      return this.http.put<any>(`${this.apiUrl}/update-application-status/${applicationId}`, body);
    }

    annulerEntretien(eventId: string): Observable<any> {
      return this.http.delete<any>(`${this.apiUrl}/annuler-entretien/${eventId}`);
    }

    traiterEntretien(entretienId: number, accepte: boolean): Observable<any> {
      return this.http.put(`${this.apiUrl}/traiter-resultat`, null, {
        params: {
          entretienId,
          accepte
        }
      });
    }
    modifierDateEntretien(entretienId: any, date: string, start: string, end: string): Observable<any> {
      const params = new HttpParams()
        .set('entretienId', entretienId)
        .set('date', date)
        .set('heureDebut', start)
        .set('heureFin', end);
    
      return this.http.put(`${this.apiUrl}/modifier-date`, null, { params });
    }
    getEntretiensByUserEmail(email: string): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/of-condidat?email=${email}`);
    }
    refuserEntretienAvecCause(entretienId: number, cause: string): Observable<any> {
      const params = new HttpParams()
        .set('entretienId', entretienId.toString())
        .set('cause', cause);
      
      return this.http.put(`${this.apiUrl}/refuser-avec-cause`, null, { params });
    }
    getCausesRefus(): Observable<string[]> {
      return this.http.get<string[]>(`${this.apiUrl}/causes-refus`);
    }
    
  }
