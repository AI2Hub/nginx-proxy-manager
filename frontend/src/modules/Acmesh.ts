/* eslint @typescript-eslint/naming-convention: off */
export const acmeshProviders: any = {
	dns_cf: "Cloudflare",
	dns_dp: "DNSPod.cn",
	dns_cx: "CloudXNS.com",
	dns_gd: "GoDaddy.com",
	dns_pdns: "PowerDNS",
	dns_nsupdate: "nsupdate",
	dns_lua: "LuaDNS",
	dns_me: "DNSMadeEasy",
	dns_aws: "Amazon Route53",
	dns_ali: "Aliyun",
	dns_ispconfig: "ISPConfig",
	dns_ad: "Alwaysdata",
	dns_linode_v4: "Linode",
	dns_freedns: "FreeDNS",
	dns_cyon: "cyon.ch",
	dns_do: "Domain-Offensive",
	dns_gandi_livedns: "Gandi LiveDNS",
	dns_knot: "Knot",
	dns_dgon: "DigitalOcean",
	dns_cloudns: "ClouDNS.net",
	dns_infoblox: "Infoblox",
	dns_vscale: "VSCALE",
	dns_dynu: "Dynu",
	dns_dnsimple: "DNSimple",
	dns_nsone: "NS1.com",
	dns_duckdns: "DuckDNS.org",
	dns_namecom: "Name.com",
	dns_dyn: "Dyn",
	dns_yandex: "pdd.yandex.ru",
	dns_he: "Hurricane Electric",
	dns_unoeuro: "UnoEuro",
	dns_inwx: "INWX",
	dns_servercow: "Servercow",
	dns_namesilo: "Namesilo.com",
	dns_autodns: "autoDNS",
	dns_azure: "Azure",
	dns_selectel: "Selectel",
	dns_zonomi: "zonomi.com",
	dns_dreamhost: "DreamHost",
	dns_da: "DirectAdmin",
	dns_kinghost: "KingHost",
	dns_zilore: "Zilore",
	dns_loopia: "Loopia",
	dns_acmedns: "ACME DNS",
	dns_tele3: "TELE3",
	dns_euserv: "Euserv.eu",
	dns_dpi: "DNSPod.com",
	dns_gcloud: "Google Cloud",
	dns_conoha: "ConoHa",
	dns_netcup: "netcup",
	dns_gdnsdk: "GratisDNS.dk",
	dns_namecheap: "Namecheap",
	dns_mydnsjp: "MyDNS.JP",
	dns_hostingde: "hosting.de",
	dns_neodigit: "Neodigit.net",
	dns_exoscale: "Exoscale",
	dns_active24: "Active24",
	dns_doapi: "do.de",
	dns_nw: "Nexcess",
	dns_rackspace: "Rackspace",
	dns_online: "Online.net",
	dns_mydevil: "MyDevil.net",
	dns_cn: "Core-Networks",
	// more, from #68 on this: https://github.com/acmesh-official/acme.sh/wiki/dnsapi
};

export default function getNiceDNSProvider(acmeshName: string) {
	if (typeof acmeshProviders[acmeshName] !== "undefined") {
		return acmeshProviders[acmeshName];
	}
	return acmeshName;
}
