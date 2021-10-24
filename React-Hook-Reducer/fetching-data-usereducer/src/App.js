
import './App.css';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'

function App() {
  return (
    <div class="col-12 col-lg-6">
    <div class="card">
        <header class="card-header">Bordered Table</header>
        <div class="card-body">
            <div></div>
            <div class="position-relative table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="" style="vertical-align: middle; overflow: hidden;">
                                <div class="d-inline">Name</div>
                            </th>
                            <th class="" style="vertical-align: middle; overflow: hidden;">
                                <div class="d-inline">Registered</div>
                            </th>
                            <th class="" style="vertical-align: middle; overflow: hidden;">
                                <div class="d-inline">Role</div>
                            </th>
                            <th class="" style="vertical-align: middle; overflow: hidden;"><div class="d-inline">Status</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="">
                            <td class="">John Doe</td>
                            <td class="">2018/01/01</td>
                            <td class="">Guest</td>
                            <td><span class="badge badge-warning">Pending</span></td>
                        </tr>
                        <tr class="">
                            <td class="">Samppa Nori</td>
                            <td class="">2018/01/01</td>
                            <td class="">Member</td>
                            <td><span class="badge badge-success">Active</span></td>
                        </tr>
                        <tr class="">
                            <td class="">Estavan Lykos</td>
                            <td class="">2018/02/01</td>
                            <td class="">Staff</td>
                            <td><span class="badge badge-danger">Banned</span></td>
                        </tr>
                        <tr class="">
                            <td class="">Chetan Mohamed</td>
                            <td class="">2018/02/01</td>
                            <td class="">Admin</td>
                            <td><span class="badge badge-secondary">Inactive</span></td>
                        </tr>
                        <tr class="">
                            <td class="">Derick Maximinus</td>
                            <td class="">2018/03/01</td>
                            <td class="">Member</td>
                            <td><span class="badge badge-warning">Pending</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav aria-label="pagination" style="display: inline;">
                <ul class="pagination justify-content-start">
                    <li class="page-item disabled"><a href="#" class="disabled page-link" aria-label="Go to first page" aria-disabled="true">«</a></li>
                    <li class="page-item disabled"><a href="#" class="disabled page-link" aria-label="Go to previous page" aria-disabled="true">‹</a></li>
                    <li class="active page-item"><a href="#" class="page-link" aria-label="Current page 1">1</a></li>
                    <li class="page-item"><a href="#" class="page-link" aria-label="Go to page 2">2</a></li>
                    <li class="page-item"><a href="#" class="page-link" aria-label="Go to page 3">3</a></li>
                    <li class="page-item"><a href="#" class="page-link" aria-label="Go to page 4">4</a></li>
                    <li class="page-item"><a href="#" class="page-link" aria-label="Go to page 5">5</a></li>
                    <li class="page-item"><a href="#" class="page-link" aria-label="Go to next page" aria-disabled="false">›</a></li>
                    <li class="page-item"><a href="#" class="page-link" aria-label="Go to last page" aria-disabled="false">»</a></li>
                </ul>
            </nav>
        </div>
    </div>
</div>
  );
}

export default App;
