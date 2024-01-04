import {Routes , Route} from 'react-router-dom'
import About from '../pages/About';
import Item from '../pages/Items/Item';
import Invoice from '../pages/Invoices/Invoice';
import Home from '../pages/Home';
import ItemEdit from '../pages/Items/ItemEdit';
import ItemCreate from '../pages/Items/ItemCreate';
import InvoiceCreate from '../pages/Invoices/InvoiceCreate';
import InvoiceEdit from '../pages/Invoices/InvoiceEdit';

function MyRouter() {

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>

            {/* Item routers */}
            <Route path='/items' element={<Item/>}/>
            <Route path='/items/:id' element={<ItemEdit/>}/>
            <Route path='/items/add' element={<ItemCreate/>}/>

            {/* Invoices routers */}
            <Route path='/invoices' element={<Invoice/>}/>
            <Route path='/invoices/add' element={<InvoiceCreate/>}/>
            <Route path='/invoices/:id' element={<InvoiceEdit/>}/>

            
        </Routes>
    )

}

export default MyRouter;