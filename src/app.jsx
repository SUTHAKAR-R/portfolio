import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import routes from './routes'
import { Page } from './container'
import { useClickOutside } from './hooks'
import { Header, Search } from './components'

const App = () => {
	const [search, setSearch] = useState(false)
	const searchRef = useClickOutside(() => setSearch(false))
	return (
		<BrowserRouter>
			{search && <Search ref={searchRef} />}
			<Page>
				<Switch>
					{routes.map(route => <Header key={route.path} setSearch={setSearch} />)}
				</Switch>
				<div className='notion-page-scroller'>
					<Switch>
						{routes.map(route => <Route key={route.path} exact={route.exact} path={route.path} component={route.main} />)}
						<Redirect to='/404' />
					</Switch>
				</div>
			</Page>
		</BrowserRouter>
	)
}

export default App