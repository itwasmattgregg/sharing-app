import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/my-items" page={MyItemsPage} name="myItems" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Private unauthenticated="home">
        <Route path="/items/new" page={NewItemPage} name="newItem" />
        <Route
          path="/items/{id:Int}/edit"
          page={EditItemPage}
          name="editItem"
        />
        <Route path="/items/{id:Int}" page={ItemPage} name="item" />
        <Route path="/items" page={ItemsPage} name="items" />
      </Private>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
