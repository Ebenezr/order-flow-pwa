import ParentClass from '../Main';

interface GetMenuParams {
  currentPage?: number;
  pageSize?: number;
  category?: string;
  tag?: string;
  available?: boolean;
}

class Menu extends ParentClass {
  async getMenu(params: GetMenuParams = {}) {
    return this.get('api/v1/menu', {
      params: {
        currentPage: params.currentPage?.toString(),
        pageSize: params.pageSize?.toString(),
        category: params.category,
        tag: params.tag,
        available: params.available?.toString(),
      },
    });
  }

  async getMenuItem(productId: string) {
    return this.get(`api/v1/menu/${encodeURIComponent(productId)}`);
  }

  async getMenuGroupedByCategory() {
    return this.get('api/v1/menu/grouped');
  }

  async getMenuGroupedByTag() {
    return this.get('api/v1/menu/grouped/tag');
  }
}

export default Menu;
