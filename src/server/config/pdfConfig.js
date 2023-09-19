const jsPDF = require("jspdf");
const { PDFDocument, rgb } = require("pdf-lib");

export async function generarFactura(user, cart) {
  // Crear un nuevo documento PDF con pdf-lib
  const pdfDoc = await PDFDocument.create();
  const [page] = pdfDoc.getPages();
  const { width, height } = page.getSize();

  // Definir una fuente personalizada y tamaño de fuente
  const font = await pdfDoc.embedFont("Helvetica-Bold");

  // Cambiar el color del texto a negro
  page.setTextColor(rgb(0, 0, 0));

  // Definir una función para agregar texto con estilo
  function agregarTextoConEstilo(texto, x, y, tamaño) {
    page.drawText(texto, {
      x,
      y,
      size: tamaño,
      font,
    });
  }

  // Agregar los elementos de la factura
  agregarTextoConEstilo("FACTURA", 10, height - 10, 16);
  agregarTextoConEstilo(
    `Número: ${Math.floor(Math.random() * 1000000)}`,
    10,
    height - 30,
    12
  );
  agregarTextoConEstilo(
    `Fecha: ${new Date().toLocaleDateString()}`,
    10,
    height - 50,
    12
  );
  agregarTextoConEstilo(
    `Identificación del Emisor: ${user.documento}`,
    10,
    height - 70,
    12
  );
  agregarTextoConEstilo(
    `Identificación del Receptor: ${user.documento}`,
    10,
    height - 90,
    12
  );
  agregarTextoConEstilo(
    "Descripción del Concepto: Compra de productos",
    10,
    height - 110,
    12
  );
  agregarTextoConEstilo(
    `Base Imponible: ${user.valorPagar}`,
    10,
    height - 130,
    12
  );
  agregarTextoConEstilo("Tipo de IVA Aplicado: 19%", 10, height - 150, 12);
  agregarTextoConEstilo(`Total: ${user.valorPagar}`, 10, height - 170, 12);

  let yOffset = height - 200;

  // Agregar los productos al carrito con estilo
  cart.forEach((product) => {
    agregarTextoConEstilo(
      `ID del Producto: ${product.itemCode}`,
      10,
      yOffset,
      12
    );
    agregarTextoConEstilo(
      `Nombre del Producto: ${product.name}`,
      10,
      yOffset - 10,
      12
    );
    agregarTextoConEstilo(
      `Precio del Producto: $${product.salesPrice.toFixed(2)}`,
      10,
      yOffset - 20,
      12
    );
    agregarTextoConEstilo(
      `Cantidad del Producto: ${product.quantity}`,
      10,
      yOffset - 30,
      12
    );
    yOffset -= 50; // Ajusta el espaciado vertical entre productos
  });

  // Guardar el documento PDF generado
  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

// Llama a la función para generar la factura
