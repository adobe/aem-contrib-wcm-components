Table (v1)
====
Table component written in HTL that displays a Table from selected source.

## Features
* Displays a table on the page with the Title element.
* CSV file and Resource Child node support
* Style System support.

### Use Object
The Table component uses the `com.adobe.cq.wcm.core.components.models.Table` Sling model as its Use-object.

### Component Policy Configuration Properties
The following JCR properties are used:

### Edit Dialog Properties
The following configuration properties are used:
1. `./id` - defines the component HTML ID attribute.
2. `./source` - defines source resource for table content
3. `./headerNames` - defines the table headers
4. `./description` - defines title for table

## BEM Description
```
BLOCK cmp-table
    ELEMENT cmp-table__description
    ELEMENT cmp-table__rowgroup
    ELEMENT cmp-table__rowgroup-row-headers
    ELEMENT cmp-table__rowgroup-row-columnheader
    ELEMENT cmp-table__rowgroup-row-data
    ELEMENT cmp-table__rowgroup-row-cell
```

