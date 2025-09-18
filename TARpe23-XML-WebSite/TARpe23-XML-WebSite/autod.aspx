<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="autod.aspx.cs" Inherits="TARpe23_XML_WebSite.autod" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Autod</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Xml ID="xml1" runat="server" DocumentSource="~/autod.xml" TransformSource="~/autod.xslt"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml2" runat="server" DocumentSource="~/autod.xml" TransformSource="~/autod1.xslt"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml3" runat="server" DocumentSource="~/autod.xml" TransformSource="~/autod2.xslt"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml4" runat="server" DocumentSource="~/autod.xml" TransformSource="~/autod3.xslt"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml5" runat="server" DocumentSource="~/autod.xml" TransformSource="~/autod4.xslt"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml6" runat="server" DocumentSource="~/autod.xml" TransformSource="~/autod5.xslt"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml7" runat="server" DocumentSource="~/autod.xml" TransformSource="~/autod6.xslt"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml8" runat="server" DocumentSource="~/autod.xml" TransformSource="~/autod7.xslt"></asp:Xml>
        </div>
    </form>
</body>
</html>
