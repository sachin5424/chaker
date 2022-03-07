import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({providedIn: 'root'})
export class ServiceNameService {
    constructor() { }
    
    tinyAlert(message: string) {
        Swal.fire(message);
      }
      ErrorNotification( message: string) {
        // Swal.fire( message,'error' );
        Swal.fire('Removed!', message, 'error');
      }
      successNotification( message: string) {
        // Swal.fire( 'Cancelled',message,'success' );
        Swal.fire('Removed!', message, 'success');
      }
      alertConfirmation() {
        Swal.fire({
          title: 'Are you sure?',
          text: 'This process is irreversible.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, go ahead.',
          cancelButtonText: 'No, let me think',
        }).then((result:any) => {
          if (result.value) {
            Swal.fire('Removed!', 'Product removed successfully.', 'success');
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Cancelled', 'Product still in our database.)', 'error');
          }
        });
      }
    }