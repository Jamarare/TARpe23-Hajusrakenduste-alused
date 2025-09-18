<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html" indent="yes" />

	<xsl:template match="/">
		<html>
			<body>
				<h2>Perekonnanimi "Kaalikas"</h2>
				<p>
					Kokku: <xsl:value-of select="count(/autod/auto[perenimi='Kaalikas'])"/>
				</p>
			</body>
		</html>
	</xsl:template>

</xsl:stylesheet>
