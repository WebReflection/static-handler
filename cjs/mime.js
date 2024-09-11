'use strict';
const APPLICATION = "application";
const AUDIO = "audio";
const FONT = "font";
const IMAGE = "image";
const MESSAGE = "message";
const MODEL = "model";
const TEXT = "text";
const VIDEO = "video";

const types = {
	[APPLICATION]: [
		"andrew-inset",
		"atom+xml",
		"atomcat+xml",
		"atomdeleted+xml",
		"atomsvc+xml",
		"atsc-dwd+xml",
		"atsc-held+xml",
		"atsc-rsat+xml",
		"automationml-aml+xml",
		"automationml-amlx+zip",
		"calendar+xml",
		"ccxml+xml",
		"cdfx+xml",
		"cdmi-capability",
		"cdmi-container",
		"cdmi-domain",
		"cdmi-object",
		"cdmi-queue",
		"cpl+xml",
		"cwl",
		"dash+xml",
		"dash-patch+xml",
		"davmount+xml",
		"dssc+der",
		"dssc+xml",
		"emma+xml",
		"emotionml+xml",
		"epub+zip",
		"exi",
		"express",
		"fdf",
		"fdt+xml",
		"font-tdpfr",
		"geo+json",
		"gml+xml",
		"gzip",
		"hyperstudio",
		"inkml+xml",
		"ipfix",
		"its+xml",
		"java-archive",
		"json",
		"ld+json",
		"lgr+xml",
		"lost+xml",
		"mac-binhex40",
		"mads+xml",
		"manifest+json",
		"marc",
		"marcxml+xml",
		"mathematica",
		"mathml+xml",
		"mbox",
		"media-policy-dataset+xml",
		"mediaservercontrol+xml",
		"metalink4+xml",
		"mets+xml",
		"mmt-aei+xml",
		"mmt-usd+xml",
		"mods+xml",
		"mp21",
		"mp4",
		"msword",
		"mxf",
		"n-quads",
		"n-triples",
		"node",
		"octet-stream",
		"oda",
		"oebps-package+xml",
		"ogg",
		"oxps",
		"p2p-overlay+xml",
		"patch-ops-error+xml",
		"pdf",
		"pgp-encrypted",
		"pgp-keys",
		"pgp-signature",
		"pkcs10",
		"pkcs7-mime",
		"pkcs7-signature",
		"pkcs8",
		"pkix-attr-cert",
		"pkix-cert",
		"pkix-crl",
		"pkix-pkipath",
		"pkixcmp",
		"pls+xml",
		"postscript",
		"provenance+xml",
		"prs.cww",
		"prs.xsf+xml",
		"pskc+xml",
		"rdf+xml",
		"reginfo+xml",
		"relax-ng-compact-syntax",
		"resource-lists+xml",
		"resource-lists-diff+xml",
		"rls-services+xml",
		"route-apd+xml",
		"route-s-tsid+xml",
		"route-usd+xml",
		"rpki-ghostbusters",
		"rpki-manifest",
		"rpki-roa",
		"rtf",
		"sbml+xml",
		"scvp-cv-request",
		"scvp-cv-response",
		"scvp-vp-request",
		"scvp-vp-response",
		"sdp",
		"senml+xml",
		"sensml+xml",
		"set-payment-initiation",
		"set-registration-initiation",
		"shf+xml",
		"sieve",
		"smil+xml",
		"sparql-query",
		"sparql-results+xml",
		"sql",
		"srgs",
		"srgs+xml",
		"sru+xml",
		"ssml+xml",
		"swid+xml",
		"tei+xml",
		"thraud+xml",
		"timestamped-data",
		"trig",
		"ttml+xml",
		"urc-ressheet+xml",
		"urc-targetdesc+xml",
		"voicexml+xml",
		"wasm",
		"watcherinfo+xml",
		"widget",
		"wsdl+xml",
		"wspolicy+xml",
		"x-x509-ca-cert",
		"xcap-att+xml",
		"xcap-caps+xml",
		"xcap-diff+xml",
		"xcap-el+xml",
		"xcap-ns+xml",
		"xenc+xml",
		"xfdf",
		"xhtml+xml",
		"xliff+xml",
		"xml",
		"xml-dtd",
		"xop+xml",
		"xslt+xml",
		"xv+xml",
		"yang",
		"yin+xml",
		"zip"
	],
	[AUDIO]: [
		"3gpp",
		"aac",
		"amr",
		"basic",
		"mobile-xmf",
		"mp4",
		"mpeg",
		"ogg"
	],
	[FONT]: [
		"collection",
		"otf",
		"ttf",
		"woff",
		"woff2"
	],
	[IMAGE]: [
		"aces",
		"apng",
		"avci",
		"avcs",
		"avif",
		"bmp",
		"cgm",
		"dicom-rle",
		"dpx",
		"emf",
		"fits",
		"g3fax",
		"gif",
		"heic",
		"heic-sequence",
		"heif",
		"heif-sequence",
		"hej2k",
		"hsj2",
		"ief",
		"jls",
		"jp2",
		"jpeg",
		"jph",
		"jphc",
		"jpm",
		"jpx",
		"jxl",
		"jxr",
		"jxra",
		"jxrs",
		"jxs",
		"jxsc",
		"jxsi",
		"jxss",
		"ktx",
		"ktx2",
		"png",
		"prs.btif",
		"prs.pti",
		"svg+xml",
		"t38",
		"tiff",
		"tiff-fx",
		"webp",
		"wmf"
	],
	[MESSAGE]: [
		"disposition-notification",
		"global",
		"global-delivery-status",
		"global-disposition-notification",
		"global-headers",
		"rfc822"
	],
	[MODEL]: [
		"3mf",
		"gltf+json",
		"gltf-binary",
		"iges",
		"jt",
		"mesh",
		"mtl",
		"obj",
		"prc",
		"step+xml",
		"step+zip",
		"step-xml+zip",
		"stl",
		"u3d",
		"vrml",
		"x3d+fastinfoset",
		"x3d+xml",
		"x3d-vrml"
	],
	[TEXT]: [
		"cache-manifest",
		"calendar",
		"css",
		"csv",
		"html",
		"javascript",
		"markdown",
		"n3",
		"plain",
		"prs.lines.tag",
		"richtext",
		"sgml",
		"shex",
		"spdx",
		"tab-separated-values",
		"troff",
		"turtle",
		"uri-list",
		"vcard",
		"vtt",
		"wgsl"
	],
	[VIDEO]: [
		"3gpp",
		"3gpp2",
		"h261",
		"h263",
		"h264",
		"iso.segment",
		"jpeg",
		"mj2",
		"mp2t",
		"mp4",
		"mpeg",
		"ogg",
		"quicktime"
	]
};

const noDot = type => type.startsWith('.') ? type.slice(1) : type;

/** @type {{"ez":"application/andrew-inset","atom":"application/atom+xml","atomcat":"application/atomcat+xml","atomdeleted":"application/atomdeleted+xml","atomsvc":"application/atomsvc+xml","dwd":"application/atsc-dwd+xml","held":"application/atsc-held+xml","rsat":"application/atsc-rsat+xml","aml":"application/automationml-aml+xml","amlx":"application/automationml-amlx+zip","xcs":"application/calendar+xml","ccxml":"application/ccxml+xml","cdfx":"application/cdfx+xml","cdmia":"application/cdmi-capability","cdmic":"application/cdmi-container","cdmid":"application/cdmi-domain","cdmio":"application/cdmi-object","cdmiq":"application/cdmi-queue","cpl":"application/cpl+xml","cwl":"application/cwl","mpd":"application/dash+xml","mpp":"application/dash-patch+xml","davmount":"application/davmount+xml","dssc":"application/dssc+der","xdssc":"application/dssc+xml","emma":"application/emma+xml","emotionml":"application/emotionml+xml","epub":"application/epub+zip","exi":"application/exi","exp":"application/express","fdf":"application/fdf","fdt":"application/fdt+xml","pfr":"application/font-tdpfr","geojson":"application/geo+json","gml":"application/gml+xml","gz":"application/gzip","stk":"application/hyperstudio","ink":"application/inkml+xml","inkml":"application/inkml+xml","ipfix":"application/ipfix","its":"application/its+xml","jar":"application/java-archive","war":"application/java-archive","ear":"application/java-archive","json":"application/json","map":"application/json","jsonld":"application/ld+json","lgr":"application/lgr+xml","lostxml":"application/lost+xml","hqx":"application/mac-binhex40","mads":"application/mads+xml","webmanifest":"application/manifest+json","mrc":"application/marc","mrcx":"application/marcxml+xml","ma":"application/mathematica","nb":"application/mathematica","mb":"application/mathematica","mathml":"application/mathml+xml","mbox":"application/mbox","mpf":"application/media-policy-dataset+xml","mscml":"application/mediaservercontrol+xml","meta4":"application/metalink4+xml","mets":"application/mets+xml","maei":"application/mmt-aei+xml","musd":"application/mmt-usd+xml","mods":"application/mods+xml","m21":"application/mp21","mp21":"application/mp21","mp4":"application/mp4","mpg4":"application/mp4","mp4s":"application/mp4","m4p":"application/mp4","doc":"application/msword","dot":"application/msword","mxf":"application/mxf","nq":"application/n-quads","nt":"application/n-triples","cjs":"application/node","bin":"application/octet-stream","dms":"application/octet-stream","lrf":"application/octet-stream","mar":"application/octet-stream","so":"application/octet-stream","dist":"application/octet-stream","distz":"application/octet-stream","pkg":"application/octet-stream","bpk":"application/octet-stream","dump":"application/octet-stream","elc":"application/octet-stream","deploy":"application/octet-stream","exe":"application/octet-stream","dll":"application/octet-stream","deb":"application/octet-stream","dmg":"application/octet-stream","iso":"application/octet-stream","img":"application/octet-stream","msi":"application/octet-stream","msp":"application/octet-stream","msm":"application/octet-stream","buffer":"application/octet-stream","oda":"application/oda","opf":"application/oebps-package+xml","ogx":"application/ogg","oxps":"application/oxps","relo":"application/p2p-overlay+xml","xer":"application/patch-ops-error+xml","pdf":"application/pdf","pgp":"application/pgp-encrypted","asc":"application/pgp-keys","sig":"application/pgp-signature","p10":"application/pkcs10","p7m":"application/pkcs7-mime","p7c":"application/pkcs7-mime","p7s":"application/pkcs7-signature","p8":"application/pkcs8","ac":"application/pkix-attr-cert","cer":"application/pkix-cert","crl":"application/pkix-crl","pkipath":"application/pkix-pkipath","pki":"application/pkixcmp","pls":"application/pls+xml","ai":"application/postscript","eps":"application/postscript","ps":"application/postscript","provx":"application/provenance+xml","cww":"application/prs.cww","xsf":"application/prs.xsf+xml","pskcxml":"application/pskc+xml","rdf":"application/rdf+xml","owl":"application/rdf+xml","rif":"application/reginfo+xml","rnc":"application/relax-ng-compact-syntax","rl":"application/resource-lists+xml","rld":"application/resource-lists-diff+xml","rs":"application/rls-services+xml","rapd":"application/route-apd+xml","sls":"application/route-s-tsid+xml","rusd":"application/route-usd+xml","gbr":"application/rpki-ghostbusters","mft":"application/rpki-manifest","roa":"application/rpki-roa","rtf":"application/rtf","sbml":"application/sbml+xml","scq":"application/scvp-cv-request","scs":"application/scvp-cv-response","spq":"application/scvp-vp-request","spp":"application/scvp-vp-response","sdp":"application/sdp","senmlx":"application/senml+xml","sensmlx":"application/sensml+xml","setpay":"application/set-payment-initiation","setreg":"application/set-registration-initiation","shf":"application/shf+xml","siv":"application/sieve","sieve":"application/sieve","smi":"application/smil+xml","smil":"application/smil+xml","rq":"application/sparql-query","srx":"application/sparql-results+xml","sql":"application/sql","gram":"application/srgs","grxml":"application/srgs+xml","sru":"application/sru+xml","ssml":"application/ssml+xml","swidtag":"application/swid+xml","tei":"application/tei+xml","teicorpus":"application/tei+xml","tfi":"application/thraud+xml","tsd":"application/timestamped-data","trig":"application/trig","ttml":"application/ttml+xml","rsheet":"application/urc-ressheet+xml","td":"application/urc-targetdesc+xml","vxml":"application/voicexml+xml","wasm":"application/wasm","wif":"application/watcherinfo+xml","wgt":"application/widget","wsdl":"application/wsdl+xml","wspolicy":"application/wspolicy+xml","der":"application/x-x509-ca-cert","crt":"application/x-x509-ca-cert","pem":"application/x-x509-ca-cert","xav":"application/xcap-att+xml","xca":"application/xcap-caps+xml","xdf":"application/xcap-diff+xml","xel":"application/xcap-el+xml","xns":"application/xcap-ns+xml","xenc":"application/xenc+xml","xfdf":"application/xfdf","xhtml":"application/xhtml+xml","xht":"application/xhtml+xml","xlf":"application/xliff+xml","xml":"application/xml","xsl":"application/xml","xsd":"application/xml","rng":"application/xml","dtd":"application/xml-dtd","xop":"application/xop+xml","xslt":"application/xslt+xml","mxml":"application/xv+xml","xhvml":"application/xv+xml","xvml":"application/xv+xml","xvm":"application/xv+xml","yang":"application/yang","yin":"application/yin+xml","zip":"application/zip","3gpp":"audio/3gpp","adts":"audio/aac","aac":"audio/aac","amr":"audio/amr","au":"audio/basic","snd":"audio/basic","mxmf":"audio/mobile-xmf","m4a":"audio/mp4","mp4a":"audio/mp4","mpga":"audio/mpeg","mp2":"audio/mpeg","mp2a":"audio/mpeg","mp3":"audio/mpeg","m2a":"audio/mpeg","m3a":"audio/mpeg","oga":"audio/ogg","ogg":"audio/ogg","spx":"audio/ogg","opus":"audio/ogg","ttc":"font/collection","otf":"font/otf","ttf":"font/ttf","woff":"font/woff","woff2":"font/woff2","exr":"image/aces","apng":"image/apng","avci":"image/avci","avcs":"image/avcs","avif":"image/avif","bmp":"image/bmp","dib":"image/bmp","cgm":"image/cgm","drle":"image/dicom-rle","dpx":"image/dpx","emf":"image/emf","fits":"image/fits","g3":"image/g3fax","gif":"image/gif","heic":"image/heic","heics":"image/heic-sequence","heif":"image/heif","heifs":"image/heif-sequence","hej2":"image/hej2k","hsj2":"image/hsj2","ief":"image/ief","jls":"image/jls","jp2":"image/jp2","jpg2":"image/jp2","jpeg":"image/jpeg","jpg":"image/jpeg","jpe":"image/jpeg","jph":"image/jph","jhc":"image/jphc","jpm":"image/jpm","jpgm":"image/jpm","jpx":"image/jpx","jpf":"image/jpx","jxl":"image/jxl","jxr":"image/jxr","jxra":"image/jxra","jxrs":"image/jxrs","jxs":"image/jxs","jxsc":"image/jxsc","jxsi":"image/jxsi","jxss":"image/jxss","ktx":"image/ktx","ktx2":"image/ktx2","png":"image/png","btif":"image/prs.btif","btf":"image/prs.btif","pti":"image/prs.pti","svg":"image/svg+xml","svgz":"image/svg+xml","t38":"image/t38","tif":"image/tiff","tiff":"image/tiff","tfx":"image/tiff-fx","webp":"image/webp","wmf":"image/wmf","disposition-notification":"message/disposition-notification","u8msg":"message/global","u8dsn":"message/global-delivery-status","u8mdn":"message/global-disposition-notification","u8hdr":"message/global-headers","eml":"message/rfc822","mime":"message/rfc822","3mf":"model/3mf","gltf":"model/gltf+json","glb":"model/gltf-binary","igs":"model/iges","iges":"model/iges","jt":"model/jt","msh":"model/mesh","mesh":"model/mesh","silo":"model/mesh","mtl":"model/mtl","obj":"model/obj","prc":"model/prc","stpx":"model/step+xml","stpz":"model/step+zip","stpxz":"model/step-xml+zip","stl":"model/stl","u3d":"model/u3d","wrl":"model/vrml","vrml":"model/vrml","x3db":"model/x3d+fastinfoset","x3d":"model/x3d+xml","x3dz":"model/x3d+xml","x3dv":"model/x3d-vrml","appcache":"text/cache-manifest","manifest":"text/cache-manifest","ics":"text/calendar","ifb":"text/calendar","css":"text/css","csv":"text/csv","html":"text/html","htm":"text/html","shtml":"text/html","js":"text/javascript","mjs":"text/javascript","md":"text/markdown","markdown":"text/markdown","n3":"text/n3","txt":"text/plain","text":"text/plain","conf":"text/plain","def":"text/plain","list":"text/plain","log":"text/plain","in":"text/plain","ini":"text/plain","dsc":"text/prs.lines.tag","rtx":"text/richtext","sgml":"text/sgml","sgm":"text/sgml","shex":"text/shex","spdx":"text/spdx","tsv":"text/tab-separated-values","t":"text/troff","tr":"text/troff","roff":"text/troff","man":"text/troff","me":"text/troff","ms":"text/troff","ttl":"text/turtle","uri":"text/uri-list","uris":"text/uri-list","urls":"text/uri-list","vcard":"text/vcard","vtt":"text/vtt","wgsl":"text/wgsl","3gp":"video/3gpp","3g2":"video/3gpp2","h261":"video/h261","h263":"video/h263","h264":"video/h264","m4s":"video/iso.segment","jpgv":"video/jpeg","mj2":"video/mj2","mjp2":"video/mj2","ts":"video/mp2t","m2t":"video/mp2t","m2ts":"video/mp2t","mts":"video/mp2t","mp4v":"video/mp4","mpeg":"video/mpeg","mpg":"video/mpeg","mpe":"video/mpeg","m1v":"video/mpeg","m2v":"video/mpeg","ogv":"video/ogg","qt":"video/quicktime","mov":"video/quicktime"}} */
module.exports = new Proxy(
	{
		"ez": [APPLICATION, 0],
		"atom": [APPLICATION, 1],
		"atomcat": [APPLICATION, 2],
		"atomdeleted": [APPLICATION, 3],
		"atomsvc": [APPLICATION, 4],
		"dwd": [APPLICATION, 5],
		"held": [APPLICATION, 6],
		"rsat": [APPLICATION, 7],
		"aml": [APPLICATION, 8],
		"amlx": [APPLICATION, 9],
		"xcs": [APPLICATION, 10],
		"ccxml": [APPLICATION, 11],
		"cdfx": [APPLICATION, 12],
		"cdmia": [APPLICATION, 13],
		"cdmic": [APPLICATION, 14],
		"cdmid": [APPLICATION, 15],
		"cdmio": [APPLICATION, 16],
		"cdmiq": [APPLICATION, 17],
		"cpl": [APPLICATION, 18],
		"cwl": [APPLICATION, 19],
		"mpd": [APPLICATION, 20],
		"mpp": [APPLICATION, 21],
		"davmount": [APPLICATION, 22],
		"dssc": [APPLICATION, 23],
		"xdssc": [APPLICATION, 24],
		"emma": [APPLICATION, 25],
		"emotionml": [APPLICATION, 26],
		"epub": [APPLICATION, 27],
		"exi": [APPLICATION, 28],
		"exp": [APPLICATION, 29],
		"fdf": [APPLICATION, 30],
		"fdt": [APPLICATION, 31],
		"pfr": [APPLICATION, 32],
		"geojson": [APPLICATION, 33],
		"gml": [APPLICATION, 34],
		"gz": [APPLICATION, 35],
		"stk": [APPLICATION, 36],
		"ink": [APPLICATION, 37],
		"inkml": [APPLICATION, 37],
		"ipfix": [APPLICATION, 38],
		"its": [APPLICATION, 39],
		"jar": [APPLICATION, 40],
		"war": [APPLICATION, 40],
		"ear": [APPLICATION, 40],
		"json": [APPLICATION, 41],
		"map": [APPLICATION, 41],
		"jsonld": [APPLICATION, 42],
		"lgr": [APPLICATION, 43],
		"lostxml": [APPLICATION, 44],
		"hqx": [APPLICATION, 45],
		"mads": [APPLICATION, 46],
		"webmanifest": [APPLICATION, 47],
		"mrc": [APPLICATION, 48],
		"mrcx": [APPLICATION, 49],
		"ma": [APPLICATION, 50],
		"nb": [APPLICATION, 50],
		"mb": [APPLICATION, 50],
		"mathml": [APPLICATION, 51],
		"mbox": [APPLICATION, 52],
		"mpf": [APPLICATION, 53],
		"mscml": [APPLICATION, 54],
		"meta4": [APPLICATION, 55],
		"mets": [APPLICATION, 56],
		"maei": [APPLICATION, 57],
		"musd": [APPLICATION, 58],
		"mods": [APPLICATION, 59],
		"m21": [APPLICATION, 60],
		"mp21": [APPLICATION, 60],
		"mp4": [APPLICATION, 61],
		"mpg4": [APPLICATION, 61],
		"mp4s": [APPLICATION, 61],
		"m4p": [APPLICATION, 61],
		"doc": [APPLICATION, 62],
		"dot": [APPLICATION, 62],
		"mxf": [APPLICATION, 63],
		"nq": [APPLICATION, 64],
		"nt": [APPLICATION, 65],
		"cjs": [APPLICATION, 66],
		"bin": [APPLICATION, 67],
		"dms": [APPLICATION, 67],
		"lrf": [APPLICATION, 67],
		"mar": [APPLICATION, 67],
		"so": [APPLICATION, 67],
		"dist": [APPLICATION, 67],
		"distz": [APPLICATION, 67],
		"pkg": [APPLICATION, 67],
		"bpk": [APPLICATION, 67],
		"dump": [APPLICATION, 67],
		"elc": [APPLICATION, 67],
		"deploy": [APPLICATION, 67],
		"exe": [APPLICATION, 67],
		"dll": [APPLICATION, 67],
		"deb": [APPLICATION, 67],
		"dmg": [APPLICATION, 67],
		"iso": [APPLICATION, 67],
		"img": [APPLICATION, 67],
		"msi": [APPLICATION, 67],
		"msp": [APPLICATION, 67],
		"msm": [APPLICATION, 67],
		"buffer": [APPLICATION, 67],
		"oda": [APPLICATION, 68],
		"opf": [APPLICATION, 69],
		"ogx": [APPLICATION, 70],
		"oxps": [APPLICATION, 71],
		"relo": [APPLICATION, 72],
		"xer": [APPLICATION, 73],
		"pdf": [APPLICATION, 74],
		"pgp": [APPLICATION, 75],
		"asc": [APPLICATION, 76],
		"sig": [APPLICATION, 77],
		"p10": [APPLICATION, 78],
		"p7m": [APPLICATION, 79],
		"p7c": [APPLICATION, 79],
		"p7s": [APPLICATION, 80],
		"p8": [APPLICATION, 81],
		"ac": [APPLICATION, 82],
		"cer": [APPLICATION, 83],
		"crl": [APPLICATION, 84],
		"pkipath": [APPLICATION, 85],
		"pki": [APPLICATION, 86],
		"pls": [APPLICATION, 87],
		"ai": [APPLICATION, 88],
		"eps": [APPLICATION, 88],
		"ps": [APPLICATION, 88],
		"provx": [APPLICATION, 89],
		"cww": [APPLICATION, 90],
		"xsf": [APPLICATION, 91],
		"pskcxml": [APPLICATION, 92],
		"rdf": [APPLICATION, 93],
		"owl": [APPLICATION, 93],
		"rif": [APPLICATION, 94],
		"rnc": [APPLICATION, 95],
		"rl": [APPLICATION, 96],
		"rld": [APPLICATION, 97],
		"rs": [APPLICATION, 98],
		"rapd": [APPLICATION, 99],
		"sls": [APPLICATION, 100],
		"rusd": [APPLICATION, 101],
		"gbr": [APPLICATION, 102],
		"mft": [APPLICATION, 103],
		"roa": [APPLICATION, 104],
		"rtf": [APPLICATION, 105],
		"sbml": [APPLICATION, 106],
		"scq": [APPLICATION, 107],
		"scs": [APPLICATION, 108],
		"spq": [APPLICATION, 109],
		"spp": [APPLICATION, 110],
		"sdp": [APPLICATION, 111],
		"senmlx": [APPLICATION, 112],
		"sensmlx": [APPLICATION, 113],
		"setpay": [APPLICATION, 114],
		"setreg": [APPLICATION, 115],
		"shf": [APPLICATION, 116],
		"siv": [APPLICATION, 117],
		"sieve": [APPLICATION, 117],
		"smi": [APPLICATION, 118],
		"smil": [APPLICATION, 118],
		"rq": [APPLICATION, 119],
		"srx": [APPLICATION, 120],
		"sql": [APPLICATION, 121],
		"gram": [APPLICATION, 122],
		"grxml": [APPLICATION, 123],
		"sru": [APPLICATION, 124],
		"ssml": [APPLICATION, 125],
		"swidtag": [APPLICATION, 126],
		"tei": [APPLICATION, 127],
		"teicorpus": [APPLICATION, 127],
		"tfi": [APPLICATION, 128],
		"tsd": [APPLICATION, 129],
		"trig": [APPLICATION, 130],
		"ttml": [APPLICATION, 131],
		"rsheet": [APPLICATION, 132],
		"td": [APPLICATION, 133],
		"vxml": [APPLICATION, 134],
		"wasm": [APPLICATION, 135],
		"wif": [APPLICATION, 136],
		"wgt": [APPLICATION, 137],
		"wsdl": [APPLICATION, 138],
		"wspolicy": [APPLICATION, 139],
		"der": [APPLICATION, 140],
		"crt": [APPLICATION, 140],
		"pem": [APPLICATION, 140],
		"xav": [APPLICATION, 141],
		"xca": [APPLICATION, 142],
		"xdf": [APPLICATION, 143],
		"xel": [APPLICATION, 144],
		"xns": [APPLICATION, 145],
		"xenc": [APPLICATION, 146],
		"xfdf": [APPLICATION, 147],
		"xhtml": [APPLICATION, 148],
		"xht": [APPLICATION, 148],
		"xlf": [APPLICATION, 149],
		"xml": [APPLICATION, 150],
		"xsl": [APPLICATION, 150],
		"xsd": [APPLICATION, 150],
		"rng": [APPLICATION, 150],
		"dtd": [APPLICATION, 151],
		"xop": [APPLICATION, 152],
		"xslt": [APPLICATION, 153],
		"mxml": [APPLICATION, 154],
		"xhvml": [APPLICATION, 154],
		"xvml": [APPLICATION, 154],
		"xvm": [APPLICATION, 154],
		"yang": [APPLICATION, 155],
		"yin": [APPLICATION, 156],
		"zip": [APPLICATION, 157],
		"3gpp": [AUDIO, 0],
		"adts": [AUDIO, 1],
		"aac": [AUDIO, 1],
		"amr": [AUDIO, 2],
		"au": [AUDIO, 3],
		"snd": [AUDIO, 3],
		"mxmf": [AUDIO, 4],
		"m4a": [AUDIO, 5],
		"mp4a": [AUDIO, 5],
		"mpga": [AUDIO, 6],
		"mp2": [AUDIO, 6],
		"mp2a": [AUDIO, 6],
		"mp3": [AUDIO, 6],
		"m2a": [AUDIO, 6],
		"m3a": [AUDIO, 6],
		"oga": [AUDIO, 7],
		"ogg": [AUDIO, 7],
		"spx": [AUDIO, 7],
		"opus": [AUDIO, 7],
		"ttc": [FONT, 0],
		"otf": [FONT, 1],
		"ttf": [FONT, 2],
		"woff": [FONT, 3],
		"woff2": [FONT, 4],
		"exr": [IMAGE, 0],
		"apng": [IMAGE, 1],
		"avci": [IMAGE, 2],
		"avcs": [IMAGE, 3],
		"avif": [IMAGE, 4],
		"bmp": [IMAGE, 5],
		"dib": [IMAGE, 5],
		"cgm": [IMAGE, 6],
		"drle": [IMAGE, 7],
		"dpx": [IMAGE, 8],
		"emf": [IMAGE, 9],
		"fits": [IMAGE, 10],
		"g3": [IMAGE, 11],
		"gif": [IMAGE, 12],
		"heic": [IMAGE, 13],
		"heics": [IMAGE, 14],
		"heif": [IMAGE, 15],
		"heifs": [IMAGE, 16],
		"hej2": [IMAGE, 17],
		"hsj2": [IMAGE, 18],
		"ief": [IMAGE, 19],
		"jls": [IMAGE, 20],
		"jp2": [IMAGE, 21],
		"jpg2": [IMAGE, 21],
		"jpeg": [IMAGE, 22],
		"jpg": [IMAGE, 22],
		"jpe": [IMAGE, 22],
		"jph": [IMAGE, 23],
		"jhc": [IMAGE, 24],
		"jpm": [IMAGE, 25],
		"jpgm": [IMAGE, 25],
		"jpx": [IMAGE, 26],
		"jpf": [IMAGE, 26],
		"jxl": [IMAGE, 27],
		"jxr": [IMAGE, 28],
		"jxra": [IMAGE, 29],
		"jxrs": [IMAGE, 30],
		"jxs": [IMAGE, 31],
		"jxsc": [IMAGE, 32],
		"jxsi": [IMAGE, 33],
		"jxss": [IMAGE, 34],
		"ktx": [IMAGE, 35],
		"ktx2": [IMAGE, 36],
		"png": [IMAGE, 37],
		"btif": [IMAGE, 38],
		"btf": [IMAGE, 38],
		"pti": [IMAGE, 39],
		"svg": [IMAGE, 40],
		"svgz": [IMAGE, 40],
		"t38": [IMAGE, 41],
		"tif": [IMAGE, 42],
		"tiff": [IMAGE, 42],
		"tfx": [IMAGE, 43],
		"webp": [IMAGE, 44],
		"wmf": [IMAGE, 45],
		"disposition-notification": [MESSAGE, 0],
		"u8msg": [MESSAGE, 1],
		"u8dsn": [MESSAGE, 2],
		"u8mdn": [MESSAGE, 3],
		"u8hdr": [MESSAGE, 4],
		"eml": [MESSAGE, 5],
		"mime": [MESSAGE, 5],
		"3mf": [MODEL, 0],
		"gltf": [MODEL, 1],
		"glb": [MODEL, 2],
		"igs": [MODEL, 3],
		"iges": [MODEL, 3],
		"jt": [MODEL, 4],
		"msh": [MODEL, 5],
		"mesh": [MODEL, 5],
		"silo": [MODEL, 5],
		"mtl": [MODEL, 6],
		"obj": [MODEL, 7],
		"prc": [MODEL, 8],
		"stpx": [MODEL, 9],
		"stpz": [MODEL, 10],
		"stpxz": [MODEL, 11],
		"stl": [MODEL, 12],
		"u3d": [MODEL, 13],
		"wrl": [MODEL, 14],
		"vrml": [MODEL, 14],
		"x3db": [MODEL, 15],
		"x3d": [MODEL, 16],
		"x3dz": [MODEL, 16],
		"x3dv": [MODEL, 17],
		"appcache": [TEXT, 0],
		"manifest": [TEXT, 0],
		"ics": [TEXT, 1],
		"ifb": [TEXT, 1],
		"css": [TEXT, 2],
		"csv": [TEXT, 3],
		"html": [TEXT, 4],
		"htm": [TEXT, 4],
		"shtml": [TEXT, 4],
		"js": [TEXT, 5],
		"mjs": [TEXT, 5],
		"md": [TEXT, 6],
		"markdown": [TEXT, 6],
		"n3": [TEXT, 7],
		"txt": [TEXT, 8],
		"text": [TEXT, 8],
		"conf": [TEXT, 8],
		"def": [TEXT, 8],
		"list": [TEXT, 8],
		"log": [TEXT, 8],
		"in": [TEXT, 8],
		"ini": [TEXT, 8],
		"dsc": [TEXT, 9],
		"rtx": [TEXT, 10],
		"sgml": [TEXT, 11],
		"sgm": [TEXT, 11],
		"shex": [TEXT, 12],
		"spdx": [TEXT, 13],
		"tsv": [TEXT, 14],
		"t": [TEXT, 15],
		"tr": [TEXT, 15],
		"roff": [TEXT, 15],
		"man": [TEXT, 15],
		"me": [TEXT, 15],
		"ms": [TEXT, 15],
		"ttl": [TEXT, 16],
		"uri": [TEXT, 17],
		"uris": [TEXT, 17],
		"urls": [TEXT, 17],
		"vcard": [TEXT, 18],
		"vtt": [TEXT, 19],
		"wgsl": [TEXT, 20],
		"3gp": [VIDEO, 0],
		"3g2": [VIDEO, 1],
		"h261": [VIDEO, 2],
		"h263": [VIDEO, 3],
		"h264": [VIDEO, 4],
		"m4s": [VIDEO, 5],
		"jpgv": [VIDEO, 6],
		"mj2": [VIDEO, 7],
		"mjp2": [VIDEO, 7],
		"ts": [VIDEO, 8],
		"m2t": [VIDEO, 8],
		"m2ts": [VIDEO, 8],
		"mts": [VIDEO, 8],
		"mp4v": [VIDEO, 9],
		"mpeg": [VIDEO, 10],
		"mpg": [VIDEO, 10],
		"mpe": [VIDEO, 10],
		"m1v": [VIDEO, 10],
		"m2v": [VIDEO, 10],
		"ogv": [VIDEO, 11],
		"qt": [VIDEO, 12],
		"mov": [VIDEO, 12]
	},
	{
		has: ($, type) => $.hasOwnProperty(noDot(type)),
		get: ($, type) => {
			const value = $[noDot(type)];
			return value && `${value[0]}/${types[value[0]][value[1]]}`;
		}
	}
);
