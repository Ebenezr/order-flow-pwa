import ParentClass from '../Main';

interface MenuItemInput {
  productId: string;
  name: string;
  price: number;
  available: boolean;
  imageUrl: string;
  category: string;
  tags: string[];
  description: string;
  recipe: unknown[];
}

class MenuAdmin extends ParentClass {
  async createMenuItem(item: MenuItemInput) {
    return this.post('api/v1/admin/menu/items', { body: item });
  }

  async updateMenuItem(productId: string, item: MenuItemInput) {
    return this.put(
      `api/v1/admin/menu/items/${encodeURIComponent(productId)}`,
      { body: item },
    );
  }

  async setItemAvailability(productId: string, available: boolean) {
    return this.put(
      `api/v1/admin/menu/items/${encodeURIComponent(productId)}/availability`,
      {
        params: { available: available.toString() },
      },
    );
  }
}

export default MenuAdmin;
