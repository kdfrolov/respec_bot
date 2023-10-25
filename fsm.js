import StateMachine from 'javascript-state-machine'


function createFsm() {
    return StateMachine.create({
        initial: 'waiting_start',
        final: 'final',
        events: [
            { name: 'got_start', from: 'waiting_start', to: 'menu' },

            { name: 'got_contacts', from: 'menu', to: 'contacts' },
            { name: 'got_menu_from_contacts', from: 'contacts', to: 'menu' },

            { name: 'got_final', from: 'menu', to: 'final' },

            { name: 'got_my_tables', from: 'menu', to: 'my_tables' },
            { name: 'got_menu_from_my_tables', from: 'my_tables', to: 'menu' },
            { name: 'got_delete', from: 'my_tables', to: 'delete' },
            { name: 'got_my_tables_from_delete', from: 'delete', to: 'my_tables' },
            { name: 'got_confirm_delete', from: 'delete', to: 'confirm_delete' },
            { name: 'got_delete_from_confirm_delete', from: 'confirm_delete', to: 'delete' },
            { name: 'got_deleted', from: 'confirm_delete', to: 'deleted' },
            { name: 'got_delete_from_deleted', from: 'deleted', to: 'delete' },

            { name: 'got_create_table', from: 'menu', to: 'create_table' },
            { name: 'got_menu_from_create_table', from: 'create_table', to: 'menu' },
            { name: 'got_n_street', from: 'create_table', to: 'n_street' },
            { name: 'got_create_table_from_n_street', from: 'n_street', to: 'create_table' },
            { name: 'got_n_intercome', from: 'n_street', to: 'n_intercome' },
            { name: 'got_n_street_from_n_intercome', from: 'n_street', to: 'n_intercome' },
            { name: 'got_n_key', from: 'n_intercome', to: 'n_key' },
            { name: 'got_n_intercome_from_n_key', from: 'n_key', to: 'n_intercome' },
            { name: 'got_n_intercome_mon', from: 'n_key', to: 'n_intercome_mon' },
            { name: 'got_n_key_from_n_intercome_mon', from: 'n_intercome_mon', to: 'n_key' },
            { name: 'got_n_wardrobe', from: 'n_intercome', to: 'n_wardrobe' },
            { name: 'got_n_wardrobe_from_n_intercome_mon', from: 'n_intercome_mon', to: 'n_wardrobe' },
            { name: 'got_t_wire', from: 'n_wardrobe', to: 't_wire' },
            { name: 'got_n_wardrobe_from_t_wire', from: 't_wire', to: 'n_wardrobe' },
            { name: 'got_n_metres', from: 't_wire', to: 'n_metres' },
            { name: 'got_t_wire_from_n_metres', from: 'n_metres', to: 't_wire' },
            { name: 'got_confirm_create', from: 'n_metres', to: 'confirm_create' },
            { name: 'got_n_metres_from_confirm_create', from: 'confirm_create', to: 'n_metres' },
            { name: 'got_create_table_from_confirm_create', from: 'confirm_create', to: 'create_table' },
            { name: 'got_menu_from_confirm_create', from: 'confirm_create', to: 'menu' }
        ]
    })
}

function eventFromStateAndMessageText(state, text) {
    switch (state) {
    case 'waitingstart':
        return text === 'start' && 'got_start'
        break
    
    
    case 'menu':
        if (text === 'contacts') {
            return 'got_contacts'
        } else if (text === 'stop') {
            return 'got_final'
        } else if (text === 'my_tables') {
            return 'got_my_tables'
        } else if (text === 'create_table') {
            return 'got_create_table'
        }
        break

    
    case 'contacts':
        return text === 'cancel' && 'got_menu_from_contacts'
        break

    
    case 'my_tables':
        if (text === 'delete') {
            return 'got_delete'
        } else if (text === 'cancel') {
            return 'got_menu_from_my_tables'
        }
        break 
    case 'delete':
        if (text === 'cancel') {
            return 'got_my_tables_from_delete'
        } else {
            return 'got_confirm_delete'
        }
        break
    case 'confirm_delete':
        if (text === 'yes') {
            return 'got_deleted'
        } else if (text === 'no') {
            return 'got_delete_from_confirm_delete'
        }
        break
    case 'deleted':
        return 'delete'
        break

    
    case 'create_table':
        if (text === 'cancel') {
            return 'got_menu_from_create_table'
        } else {
            return 'got_n_street'
        }
        break
    case 'n_street':
        if (text === 'previous question') {
            return 'got_create_table_from_n_street'
        } else {
            return 'got_n_intercome'
        }
        break
    case 'n_intercome':
        if (text === 'previous question') {
            return 'got_n_street_from_n_intercome'
        } else if (text === '0') {
            return 'got_n_wardrobe'
        } else {
            return 'got_n_key'
        }
        break
    case 'n_key':
        if (text === 'previous question') {
            return 'got_n_intercome_from_n_key'
        } else {
            return 'got_n_intercome_mon'
        }
        break
    case 'n_intercome_mon':
        if (text === 'previous question') {
            return 'got_n_key_from_n_intercome_mon'
        } else {
            return 'got_n_wardrobe_from_n_intercome_mon'
        }
        break
    case 'n_wardrobe':
        return 'got_t_wire'
        break 
    case 't_wire':
        if (text === 'previous question') {
            return 'got_n_wardrobe_from_t_wire'
        } else {
            return 'got_n_metres'
        }
        break
    case 'n_metres':
        if (text === 'previous question') {
            return 'got_t_wire_from_n_metres'
        } else {
            return 'got_confirm_create'
        }
        break
    case 'confirm_create':
        if (text === 'previous question') {
            return 'got_n_metres_from_confirm_create'
        } else if (text === 'no') {
            return 'got_create_table_from_confirm_create'
        } else if (text === 'yes') {
            return 'got_menu_from_confirm_create'
        }
    }
  }