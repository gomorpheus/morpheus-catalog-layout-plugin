package com.morpheusdata.cataloglayout

import com.morpheusdata.core.AbstractCatalogItemLayoutProvider
import com.morpheusdata.core.MorpheusContext
import com.morpheusdata.core.Plugin
import com.morpheusdata.model.Account
import com.morpheusdata.model.CatalogItemType
import com.morpheusdata.model.TaskConfig
import com.morpheusdata.model.ContentSecurityPolicy
import com.morpheusdata.model.User
import com.morpheusdata.views.HTMLResponse
import com.morpheusdata.views.ViewModel

/**
 * Example TabProvider
 */
class StackedCatalogLayoutProvider extends AbstractCatalogItemLayoutProvider {
	Plugin plugin
	MorpheusContext morpheus

	String code = 'catalog-item-stacked'
	String name = 'Stacked'

	StackedCatalogLayoutProvider(Plugin plugin, MorpheusContext context) {
		this.plugin = plugin
		this.morpheus = context
	}

	/**
	 * Demonstrates building a TaskConfig to get details about the Server and renders the html from the specified template.
	 * @param server details of a ComputeServer
	 * @return
	 */
	@Override
	HTMLResponse renderTemplate(CatalogItemType catalogItemType, User user) {
		ViewModel<CatalogItemType> model = new ViewModel<>()
		model.object = catalogItemType
		getRenderer().renderTemplate("hbs/stackedCatalogItem", model)
	}
}