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
    const response = await this.get('api/v1/menu/grouped');
    if (
      response?.body &&
      typeof response.body === 'object' &&
      !Array.isArray(response.body)
    ) {
      response.body = Object.entries(response.body).map(
        ([category, items]) => ({ category, items }),
      );
    }
    return response;
  }

  async getMenuGroupedByTag() {
    const response = await this.get('api/v1/menu/grouped/tag');
    if (
      response?.body &&
      typeof response.body === 'object' &&
      !Array.isArray(response.body)
    ) {
      response.body = Object.entries(response.body).map(([tag, items]) => ({
        tag,
        items,
      }));
    }
    return response;
  }
}

export default Menu;
