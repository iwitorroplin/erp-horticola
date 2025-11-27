import type { ElementType } from "react";
import {
  Box,
  Home,
  ListOrdered,
  Package,
  PackagePlus,
  Settings,
  SlidersHorizontal,
  UserCog,
  Users,
} from "lucide-react";

export type NavigationItem = {
  key: string;
  label: string;
  path: string;
  icon: ElementType;
  children?: NavigationItem[];
  showInSidebar?: boolean;
};

const entriesIngredientsChildren: NavigationItem[] = [
  {
    key: "entries-ingredients.dashboard",
    label: "Dashboard",
    path: "/entries-ingredients",
    icon: PackagePlus,
  },
  {
    key: "entries-ingredients.add",
    label: "Añadir ingrediente",
    path: "/entries-ingredients/add",
    icon: PackagePlus,
  },
  {
    key: "entries-ingredients.list",
    label: "Listar ingredientes",
    path: "/entries-ingredients/list",
    icon: ListOrdered,
  },
  {
    key: "entries-ingredients.settings",
    label: "Configuración",
    path: "/entries-ingredients/settings",
    icon: Settings,
  },
];

const stockChildren: NavigationItem[] = [
  {
    key: "stock.dashboard",
    label: "Dashboard",
    path: "/stock",
    icon: Package,
  },
  {
    key: "stock.movements",
    label: "Movimientos",
    path: "/stock/movements",
    icon: SlidersHorizontal,
  },
  {
    key: "stock.inventory",
    label: "Inventario",
    path: "/stock/inventory",
    icon: ListOrdered,
  },
  {
    key: "stock.settings",
    label: "Configuración",
    path: "/stock/settings",
    icon: Settings,
  },
];

const usersChildren: NavigationItem[] = [
  {
    key: "users.list",
    label: "Listado",
    path: "/usuarios",
    icon: Users,
  },
  {
    key: "users.roles",
    label: "Roles y permisos",
    path: "/usuarios/roles",
    icon: UserCog,
  },
  {
    key: "users.invitations",
    label: "Invitaciones",
    path: "/usuarios/invitaciones",
    icon: PackagePlus,
  },
  {
    key: "users.settings",
    label: "Configuración",
    path: "/usuarios/configuracion",
    icon: Settings,
  },
];

const rawMaterialEntriesChildren: NavigationItem[] = [
  {
    key: "raw-material-entries.dashboard",
    label: "Dashboard",
    path: "/raw-material-entries",
    icon: Box,
  },
  {
    key: "raw-material-entries.add",
    label: "Registrar entrada",
    path: "/raw-material-entries/add",
    icon: PackagePlus,
  },
  {
    key: "raw-material-entries.list",
    label: "Listado",
    path: "/raw-material-entries/list",
    icon: ListOrdered,
  },
  {
    key: "raw-material-entries.settings",
    label: "Configuración",
    path: "/raw-material-entries/settings",
    icon: Settings,
  },
];

export const navigationItems: NavigationItem[] = [
  {
    key: "home",
    label: "Inicio",
    path: "/",
    icon: Home,
  },
  {
    key: "users",
    label: "Usuarios",
    path: "/usuarios",
    icon: Users,
    children: usersChildren,
  },
  {
    key: "stock",
    label: "Stock",
    path: "/stock",
    icon: Package,
    children: stockChildren,
  },
  {
    key: "entries-ingredients",
    label: "Entrada de Ingredientes",
    path: "/entries-ingredients",
    icon: PackagePlus,
    children: entriesIngredientsChildren,
  },
  {
    key: "raw-material-entries",
    label: "Entrada de Materia Prima",
    path: "/raw-material-entries",
    icon: Box,
    children: rawMaterialEntriesChildren,
  },
];

const flattenNavigation = (items: NavigationItem[]): NavigationItem[] =>
  items.flatMap((item) => [item, ...(item.children ? flattenNavigation(item.children) : [])]);

export const navigationIndex = flattenNavigation(navigationItems).reduce(
  (acc, item) => {
    acc[item.key] = item;
    return acc;
  },
  {} as Record<string, NavigationItem>,
);

export type QuickAccessItem = NavigationItem & { description: string };

const quickAccessConfig: Array<[string, string]> = [
  ["users", "Crear, editar y asignar roles."],
  ["stock", "Consulta y gestión de existencias."],
  ["entries-ingredients", "Registrar y revisar entradas de ingredientes."],
];

export const quickAccessDefaults: QuickAccessItem[] = quickAccessConfig
  .map(([key, description]) => {
    const navItem = navigationIndex[key];
    return navItem ? { ...navItem, description } : null;
  })
  .filter(Boolean) as QuickAccessItem[];
